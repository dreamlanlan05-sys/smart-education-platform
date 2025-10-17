// app/api/ai/chat/route.ts
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// 初始化OpenAI客户端
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// 系统提示词 - 定义AI助教的角色
const SYSTEM_PROMPT = `你是一位专业的AI教育助手，名为"智慧伙伴"。你的使命是帮助中小学生学习成长。

你的特点：
- 友好、耐心、鼓励学生
- 善于用简单易懂的方式解释复杂概念
- 会根据学生的年级调整讲解深度
- 鼓励批判性思维和创造力
- 遵循"Learning is Earning"理念，让学生理解学习的价值

你可以帮助学生：
1. 解答各科学习问题（数学、语文、英语、科学等）
2. 提供学习方法和技巧
3. 制定个性化学习计划
4. 推荐合适的学习资源
5. 培养良好的学习习惯

回答时请：
- 使用emoji让对话更生动
- 分步骤讲解，循序渐进
- 适当举例说明
- 鼓励学生思考而不是直接给答案
- 保持积极正面的态度`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: '无效的消息格式' },
        { status: 400 }
      );
    }

    // 调用OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    const aiMessage = completion.choices[0]?.message?.content || '抱歉，我现在无法回答。';

    return NextResponse.json({
      message: aiMessage,
      usage: completion.usage,
    });

  } catch (error: any) {
    console.error('AI Chat API Error:', error);
    
    // 如果OpenAI API Key未设置，返回模拟响应
    if (error?.status === 401 || !process.env.OPENAI_API_KEY) {
      return NextResponse.json({
        message: '🤖 我是AI助教（Demo模式）\n\n由于API未配置，我现在处于演示模式。在正式部署后，我将能够：\n\n✅ 回答各科学习问题\n✅ 提供个性化学习建议\n✅ 解释复杂概念\n✅ 制定学习计划\n\n请配置OpenAI API Key以启用完整功能！',
      });
    }

    return NextResponse.json(
      { error: '服务暂时不可用，请稍后重试' },
      { status: 500 }
    );
  }
}