// components/features/LessonGenerator.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Download, Copy, Sparkles } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import GlassButton from '@/components/ui/GlassButton';

export default function LessonGenerator() {
  const [formData, setFormData] = useState({
    subject: '数学',
    grade: '五年级',
    topic: '',
    duration: '45',
  });

  const [lessonPlan, setLessonPlan] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const subjects = ['语文', '数学', '英语', '物理', '化学', '生物', '历史', '地理', '科学'];
  const grades = [
    '一年级', '二年级', '三年级', '四年级', '五年级', '六年级',
    '初一', '初二', '初三',
    '高一', '高二', '高三'
  ];
  const durations = ['40', '45', '90'];

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleGenerate = async () => {
    if (!formData.topic.trim()) {
      alert('请输入课程主题');
      return;
    }

    setIsGenerating(true);
    setLessonPlan('');

    try {
      const response = await fetch('/api/lessons/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setLessonPlan(data.lessonPlan);
      } else {
        alert(data.error || '生成失败，请重试');
      }
    } catch (error) {
      console.error('Error generating lesson:', error);
      alert('网络错误，请检查连接');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(lessonPlan);
    alert('✅ 教案已复制到剪贴板！');
  };

  const handleDownload = () => {
    const blob = new Blob([lessonPlan], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${formData.topic}_教案_${new Date().toISOString().split('T')[0]}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* 表单卡片 */}
      <GlassCard>
        <div className="flex items-center gap-3 mb-6">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl"
          >
            <BookOpen className="w-6 h-6 text-white" />
          </motion.div>
          <div>
            <h2 className="text-2xl font-bold text-white">智能教案生成器</h2>
            <p className="text-gray-400">AI驱动，一键生成高质量教案</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* 学科选择 */}
          <div>
            <label className="block text-white font-semibold mb-2">
              📚 学科
            </label>
            <select
              value={formData.subject}
              onChange={(e) => handleChange('subject', e.target.value)}
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white focus:outline-none focus:border-green-400/50 transition-all"
            >
              {subjects.map(subject => (
                <option key={subject} value={subject} className="bg-slate-800">
                  {subject}
                </option>
              ))}
            </select>
          </div>

          {/* 年级选择 */}
          <div>
            <label className="block text-white font-semibold mb-2">
              🎓 年级
            </label>
            <select
              value={formData.grade}
              onChange={(e) => handleChange('grade', e.target.value)}
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white focus:outline-none focus:border-green-400/50 transition-all"
            >
              {grades.map(grade => (
                <option key={grade} value={grade} className="bg-slate-800">
                  {grade}
                </option>
              ))}
            </select>
          </div>

          {/* 课程主题 */}
          <div className="md:col-span-2">
            <label className="block text-white font-semibold mb-2">
              💡 课程主题
            </label>
            <input
              type="text"
              value={formData.topic}
              onChange={(e) => handleChange('topic', e.target.value)}
              placeholder="如：分数的加减法、古诗词赏析、力学基础等..."
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-400/50 transition-all"
            />
          </div>

          {/* 课时长度 */}
          <div>
            <label className="block text-white font-semibold mb-2">
              ⏱️ 课时长度
            </label>
            <select
              value={formData.duration}
              onChange={(e) => handleChange('duration', e.target.value)}
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white focus:outline-none focus:border-green-400/50 transition-all"
            >
              {durations.map(duration => (
                <option key={duration} value={duration} className="bg-slate-800">
                  {duration} 分钟
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 生成按钮 */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleGenerate}
          disabled={isGenerating || !formData.topic.trim()}
          className="w-full py-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl text-white font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-2xl transition-all flex items-center justify-center gap-3"
        >
          {isGenerating ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="w-6 h-6" />
              </motion.div>
              <span>正在生成教案...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-6 h-6" />
              <span>🚀 生成智能教案</span>
            </>
          )}
        </motion.button>
      </GlassCard>

      {/* 教案输出区域 */}
      {lessonPlan && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <GlassCard>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">📝 生成的教案</h3>
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopy}
                  className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-lg text-white hover:bg-blue-500/30 transition-all flex items-center gap-2"
                >
                  <Copy className="w-4 h-4" />
                  复制
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownload}
                  className="px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-lg text-white hover:bg-green-500/30 transition-all flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  下载
                </motion.button>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 max-h-[600px] overflow-y-auto">
              <pre className="text-white whitespace-pre-wrap font-sans leading-relaxed">
                {lessonPlan}
              </pre>
            </div>
          </GlassCard>
        </motion.div>
      )}
    </div>
  );
}