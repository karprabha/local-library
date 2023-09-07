import * as sass from "sass";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const compileSCSS = () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const srcDir = path.join(__dirname, "public", "styles");
    const outputDir = path.join(__dirname, "public", "styles");

    fs.readdirSync(srcDir).forEach((file) => {
        if (file.endsWith(".scss")) {
            const inputFilePath = path.join(srcDir, file);
            const outputFilePath = path.join(
                outputDir,
                file.replace(".scss", ".css")
            );

            try {
                const result = sass.compile(inputFilePath);

                if (result && result.css) {
                    fs.writeFileSync(outputFilePath, result.css.toString());
                    console.log(
                        `Compiled: ${inputFilePath} => ${outputFilePath}`
                    );
                } else {
                    console.error(`Error compiling: ${inputFilePath}`);
                }
            } catch (err) {
                console.error(`Error compiling: ${inputFilePath}`);
                console.error(err);
            }
        }
    });
};

export default compileSCSS;
