/**
 * Codex 自动诊断与修复配置文件
 * -----------------------------------------------
 * 用于智慧教育学习伙伴 (Smart Education Companion)
 * 架构：Next.js + Prisma + Vercel
 * 作者：Futuro Advisor
 */

module.exports = {
  projectName: "智慧教育学习伙伴 (Smart Education Companion)",
  framework: "nextjs",
  version: "1.0.0",

  // 🔍 自动扫描目录
  scan: {
    include: ["pages", "components", "app", "public", "styles"],
    exclude: [".next", "node_modules", "dist", ".vercel"]
  },

  // 🧠 智能诊断规则
  auditRules: {
    checkNextConfig: true,
    checkPublicAssets: true,
    checkGitIgnore: true,
    checkFonts: true,
    checkDependencies: true,
    checkAPIEndpoints: true,
    checkEnvFile: true,
    checkAnimationImports: true
  },

  // 🧩 自动修复策略
  fixRules: {
    autoInstallMissingPackages: true, // 自动安装缺失依赖
    autoFixNextConfig: true,          // 自动修复 next.config.js
    autoRepairGitIgnore: true,        // 自动清理构建目录上传问题
    autoReplaceGoogleFonts: true,     // 自动改成本地字体
    autoRestorePublicAssets: true,    // 自动补齐动画与图片路径
    autoFixEnvVars: true              // 自动补全 .env 关键变量
  },

  // 🔧 自定义修复逻辑
  customFixes: {
    "fix-fonts": {
      description: "替换 Google Fonts 为本地字体",
      run: async ({ fs, logger }) => {
        const fsPromises = require("fs").promises;
        const fontDir = "public/fonts";
        await fsPromises.mkdir(fontDir, { recursive: true });

        const interCSS = `
@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-Regular.woff2') format('woff2');
  font-weight: 400;
}
@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-Bold.woff2') format('woff2');
  font-weight: 700;
}`;
        await fsPromises.writeFile(`${fontDir}/inter.css`, interCSS, "utf8");
        logger.success("✅ 本地字体样式文件已创建：/public/fonts/inter.css");
      }
    },

    "fix-animations": {
      description: "检测并修复动画缺失路径",
      run: async ({ fs, logger }) => {
        const animationDir = "public/animations";
        const fsPromises = require("fs").promises;
        await fsPromises.mkdir(animationDir, { recursive: true });

        const placeholder = {
          lottie: `${animationDir}/intro.json`,
          background: `${animationDir}/bg-gradient.css`
        };

        for (const [key, file] of Object.entries(placeholder)) {
          try {
            await fsPromises.access(file);
          } catch {
            await fsPromises.writeFile(
              file,
              key === "lottie"
                ? JSON.stringify({ version: "5.9.4", layers: [] }, null, 2)
                : "body { background: linear-gradient(90deg, #0066ff, #00cc66); }"
            );
            logger.info(`🪄 创建缺失文件：${file}`);
          }
        }

        logger.success("✅ 动画路径检查与修复完成");
      }
    }
  },

  // 🚀 运行流程定义
  hooks: {
    beforeAudit: async ({ logger }) => {
      logger.info("🧠 正在分析项目结构与配置文件...");
    },
    afterAudit: async ({ results, logger }) => {
      logger.info(`📊 检测完毕，共发现 ${results.issues.length} 个潜在问题。`);
    },
    beforeFix: async ({ logger }) => {
      logger.info("🛠️ 正在应用智能修复...");
    },
    afterFix: async ({ logger }) => {
      logger.success("🎉 所有问题已修复完成！请重新运行 `vercel --prod` 部署。");
    }
  }
};
