import Typography from "typography";
import CodePlugin from "typography-plugin-code";
import bootstrapTheme from "typography-theme-bootstrap";

bootstrapTheme.plugins = [new CodePlugin()];

const typography = new Typography(bootstrapTheme);

export default typography;
