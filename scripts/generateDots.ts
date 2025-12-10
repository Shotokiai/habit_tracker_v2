import fs from "fs";
import path from "path";
import { svgPathProperties } from "svg-path-properties";

const illustrationsDir = path.join(process.cwd(), "illustrations");
const dotsOutputDir = path.join(process.cwd(), "public/dots");

if (!fs.existsSync(dotsOutputDir)) {
  fs.mkdirSync(dotsOutputDir, { recursive: true });
}

const DOT_COUNT = 60;

function extractPathD(svgData: string): string {
  // Try to find the main path with d attribute
  const pathMatch = svgData.match(/<path[^>]*d="([^"]*)"/);
  if (pathMatch) return pathMatch[1];
  
  // If no path found, try to extract from other SVG elements
  throw new Error("SVG path not found. Make sure your SVG contains a <path> element with 'd' attribute.");
}

function generateDotsFromPath(d: string) {
  const properties = new svgPathProperties(d);
  const length = properties.getTotalLength();
  const points = [];

  for (let i = 0; i < DOT_COUNT; i++) {
    const p = properties.getPointAtLength((length / DOT_COUNT) * i);
    points.push({ 
      id: i + 1, 
      x: Math.round(p.x), 
      y: Math.round(p.y) 
    });
  }
  return points;
}

function processIllustrations() {
  console.log("🚀 Starting SVG to dots conversion...");
  
  if (!fs.existsSync(illustrationsDir)) {
    console.error("❌ Illustrations directory not found. Please create 'illustrations/' folder and add SVG files.");
    return;
  }

  const files = fs.readdirSync(illustrationsDir).filter(f => f.endsWith(".svg"));
  
  if (files.length === 0) {
    console.log("📁 No SVG files found in illustrations/ directory.");
    console.log("💡 Add your SVG files to the illustrations/ folder and run this script again.");
    return;
  }

  files.forEach(file => {
    try {
      console.log(`\n🔄 Processing ${file}...`);
      
      const svgRaw = fs.readFileSync(path.join(illustrationsDir, file), "utf8");
      const d = extractPathD(svgRaw);
      const dots = generateDotsFromPath(d);

      const name = file.replace(".svg", "");
      const outputData = {
        name: name.charAt(0).toUpperCase() + name.slice(1),
        dots,
        totalDots: DOT_COUNT,
        createdAt: new Date().toISOString()
      };

      fs.writeFileSync(
        path.join(dotsOutputDir, `${name}.json`),
        JSON.stringify(outputData, null, 2)
      );

      console.log(`✅ Generated ${DOT_COUNT} dots for ${name}`);
      console.log(`   📄 Output: public/dots/${name}.json`);
      
    } catch (error: any) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  });

  console.log("\n🎉 Dot generation complete!");
  console.log(`📊 Processed ${files.length} SVG file(s)`);
}

processIllustrations();