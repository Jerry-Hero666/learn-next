// import { NextRequest, NextResponse } from "next/server";

// export async function POST(request: NextRequest) {
//   const { username, password } = await request.json();

//   //  调用后端接口
//   const res = await fetch("https://api.zhihur.com/admin/auth/sign_in", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ username, password }),
//   });

//   // todo  BFF
//   // todo  把拿到的token 通过cookie的形式种植到前端

//   const data = await res.json();
//   return NextResponse.json(
//     {
//       success: true,
//       msg:data.message,
//     },
//     {
//       headers: {
//         "Set-Cookie": `token=${data.token}; Path=/; HttpOnly; Max-Age=86400`,
//       },
//     }
//   );
// }

// app/api/login/route.js
import { NextRequest, NextResponse } from "next/server";

/**
 * 模拟生成 Token 的函数
 * 在真实场景中，这里会使用 JWT 库 (如 jsonwebtoken) 生成带签名的 token
 */
function generateToken(username: any) {
  // 这是一个非常基础的模拟，实际中应包含加密、过期时间等
  const payload = {
    user: username,
    // Mock 一个未来 24 小时后过期的时间戳 (单位: 秒)
    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
    // 添加一个随机数以防止单次生成的 token 被轻易猜到
    iat: Math.floor(Date.now() / 1000), // issued at
  };
  // 简单地将 payload 转为 JSON 字符串并进行 base64 编码 (模拟 JWT 结构)
  // 注意：这不包含签名，也不是标准的 JWT 实现，仅作模拟用
  const header = Buffer.from(
    JSON.stringify({ typ: "JWT", alg: "none" })
  ).toString("base64url");
  const payloadStr = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = "SIGNATURE_PLACEHOLDER"; // 模拟签名部分

  return `${header}.${payloadStr}.${signature}`;
}

// 定义 POST 请求处理器
export async function POST(request: NextRequest) {
  try {
    // 1. 解析请求体 JSON 数据
    const body = await request.json();
    const { username, password } = body;

    console.log(`[API] Login attempt for username: ${username}`);

    // 2. 验证请求体是否包含必要字段
    if (!username || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Username and password are required.",
        },
        { status: 400 }
      );
    }

    // 模拟用户数据库 (实际应用中应从数据库查询)
    const users = [
      { username: "admin", password: "123123" },
      { username: "user1", password: "mypassword" },
    ];

    // 3. 查找用户 (简单比对，实际应用中需比对哈希后的密码)
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      // 4. 用户名密码正确，生成 token 并返回成功响应
      const token = generateToken(username);
      console.log(
        `[API] Login successful for username: ${username}. Token generated.`
      );
      return NextResponse.json(
        {
          success: true,
          message: "Login successful!",
          data: {
            token: token,
          },
        },
        {
          status: 200,
          headers: {
            "Set-Cookie": `token=${token}; Path=/; HttpOnly; Max-Age=86400`,
          },
        }
      );
    } else {
      // 5. 用户名或密码错误，返回失败响应
      console.log(
        `[API] Login failed for username: ${username}. Invalid credentials.`
      );
      return NextResponse.json(
        {
          success: false,
          message: "Invalid username or password.",
        },
        { status: 401 }
      );
    }
  } catch (error) {
    // 6. 处理解析 JSON 时可能发生的错误
    console.error("[API] Error parsing request body:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Invalid JSON in request body.",
      },
      { status: 400 }
    );
  }
}
