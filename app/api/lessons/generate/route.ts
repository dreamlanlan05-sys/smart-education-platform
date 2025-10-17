// app/api/lessons/generate/route.ts
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { subject, grade, topic, duration } = body;

    if (!subject || !grade || !topic) {
      return NextResponse.json(
        { error: '请提供完整的教案信息' },
        { status: 400 }
      );
    }

    const prompt = `请为以下课程生成一份详细的教案：

学科：${subject}
年级：${grade}
课程主题：${topic}
课时长度：${duration || 45}分钟

请按照以下结构生成教案：

# ${topic} - 教学设计

## 一、教学目标
（知识目标、能力目标、情感态度价值观目标）

## 二、教学重点与难点
**重点：**
**难点：**

## 三、教学准备
（教师准备、学生准备、教学材料）

## 四、教学过程

### 1. 导入环节（5分钟）
- 创设情境，激发兴趣
- 引出本课主题

### 2. 新课讲授（20-25分钟）
- 分步骤详细讲解核心知识点
- 配合例题和互动提问
- 注重启发式教学

### 3. 课堂练习（10分钟）
- 设计分层练习题
- 巩固所学知识

### 4. 总结提升（5分钟）
- 知识梳理
- 课后作业布置

## 五、板书设计
（简要的板书布局）

## 六、教学反思
（预设的教学效果和改进方向）

请确保教案符合现代教育理念，注重学生主体地位，培养批判性思维和创造力。`;

    // 调用OpenAI生成教案
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: '你是一位经验丰富的教育专家，擅长设计创新、实用的教学方案。你的教案注重学生中心、互动参与和能力培养。',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.8,
      max_tokens: 2000,
    });

    const lessonPlan = completion.choices[0]?.message?.content || '';

    // 这里可以保存到数据库
    // await prisma.lessonPlan.create({ ... })

    return NextResponse.json({
      lessonPlan,
      metadata: {
        subject,
        grade,
        topic,
        duration,
        generatedAt: new Date().toISOString(),
      },
    });

  } catch (error: any) {
    console.error('Lesson Generation Error:', error);

    // 如果API未配置，返回模板教案
    if (error?.status === 401 || !process.env.OPENAI_API_KEY) {
      const body = await request.json();
      const { subject, grade, topic, duration } = body;
      
      return NextResponse.json({
        lessonPlan: `# ${topic} - 教学设计（Demo模板）

## 一、教学目标

**知识目标：**
- 理解${topic}的基本概念和核心知识点
- 掌握${topic}的解题方法和应用技巧

**能力目标：**
- 培养学生的逻辑思维和分析能力
- 提高学生独立解决问题的能力

**情感态度价值观：**
- 激发学生对${subject}的学习兴趣
- 培养科学探究精神和创新意识

## 二、教学重点与难点

**重点：** ${topic}的核心概念理解和基本方法掌握
**难点：** ${topic}在实际问题中的灵活运用

## 三、教学准备

**教师准备：**
- 多媒体课件
- 教学案例和练习题
- 互动教学工具

**学生准备：**
- 预习相关内容
- 准备课堂笔记本

## 四、教学过程

### 1. 导入环节（5分钟）
🎯 通过生活中的实例引入本课主题，激发学生的学习兴趣和好奇心。

**活动设计：**
- 提出引导性问题
- 展示有趣的案例或视频
- 学生分享相关经验

### 2. 新课讲授（${Math.floor((duration || 45) * 0.5)}分钟）

**第一部分：基础概念讲解**
- 明确定义和关键术语
- 图示说明，帮助理解
- 学生互动提问

**第二部分：方法与技巧**
- 分步骤演示解题过程
- 归纳总结解题规律
- 典型例题分析

**第三部分：拓展应用**
- 联系实际生活
- 跨学科知识整合
- 培养创新思维

### 3. 课堂练习（10分钟）

**基础练习：** 巩固核心知识点
**提高练习：** 培养综合运用能力
**挑战练习：** 激发创新思维

### 4. 总结提升（5分钟）

**知识梳理：**
- 回顾本课重点内容
- 构建知识框架图

**课后作业：**
1. 完成练习册相关题目
2. 预习下一课内容
3. 拓展阅读（可选）

## 五、板书设计

\`\`\`
        ${topic}
         |
    _____|_____
   |     |     |
 概念  方法  应用
\`\`\`

## 六、教学反思

本教案注重以学生为中心，通过情境导入、互动探究、实践应用等环节，培养学生的主动学习能力和创新思维。在实际教学中，应根据学生反馈及时调整教学节奏和难度。

---
📌 **提示：** 这是Demo模板。配置OpenAI API后，将生成更详细、个性化的教案内容。`,
        metadata: {
          subject,
          grade,
          topic,
          duration,
          generatedAt: new Date().toISOString(),
          mode: 'demo',
        },
      });
    }

    return NextResponse.json(
      { error: '教案生成失败，请稍后重试' },
      { status: 500 }
    );
  }
}