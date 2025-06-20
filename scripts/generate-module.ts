import fs from 'fs';
import path from 'path';

const moduleName = process.argv[2];

if (!moduleName) {
  console.error('❌ Vui lòng cung cấp tên module. Ví dụ: npm run generate quote');
  process.exit(1);
}

const SRC_DIR = path.join(__dirname, '../src/modules');
const TEMPLATE_DIR = path.join(SRC_DIR, '__template__');
const TARGET_DIR = path.join(SRC_DIR, moduleName);

// Helper để thay tên file & nội dung
const replaceContent = (content: string, name: string) => {
  const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
  return content
    .replace(/__template__/g, name)
    .replace(/__Template__/g, capitalized)
    .replace(/Template/g, capitalized);
};

// Đệ quy copy folder
const copyFolder = (src: string, dest: string) => {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });

  fs.readdirSync(src).forEach((file) => {
    const srcPath = path.join(src, file);
    const newFileName = file.replace(/__template__/g, moduleName);
    const destPath = path.join(dest, newFileName);

    if (fs.lstatSync(srcPath).isDirectory()) {
      copyFolder(srcPath, destPath);
    } else {
      const content = fs.readFileSync(srcPath, 'utf-8');
      const replaced = replaceContent(content, moduleName);
      fs.writeFileSync(destPath, replaced, 'utf-8');
    }
  });
};

// Check
if (fs.existsSync(TARGET_DIR)) {
  console.error(`❌ Module "${moduleName}" đã tồn tại.`);
  process.exit(1);
}

copyFolder(TEMPLATE_DIR, TARGET_DIR);
console.log(`✅ Tạo module "${moduleName}" thành công tại src/modules/${moduleName}`);
