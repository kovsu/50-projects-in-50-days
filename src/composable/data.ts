import { defineAsyncComponent, markRaw, reactive } from "vue";
// import content from "./components/Day-1/readme.md?raw";
// console.log(content);

type VueProjectModule = typeof import("*.vue");
// type MarkdownModule = typeof import("*.md");

type ImportVueModuleFunction = () => Promise<VueProjectModule>;
// type ImportMdModuleFunction = () => Promise<MarkdownModule>;

interface IData {
  [key: string]: {
    file?: any;
  };
}

export const allProjects = reactive<{
  value: IData;
}>({
  value: {},
});

const resolveImportGlobModule = async (
  projectModules: Record<string, ImportVueModuleFunction>
  // markdownModules: Record<string, ImportMdModuleFunction>
) => {
  const data: IData = {};
  // 假设每一个文件下都会有一个 vue 文件和 md 文件
  for (let key of Object.keys(projectModules)) {
    const str = key.split("/").slice(2, -1).join("/");
    data[str] = {
      // 不这样使用 会警告: 提示组件被包装成了响应式的对象，会造成不必要的性能开销
      // markRaw 将一个对象标记为不可被转为代理。返回该对象本身
      // defineAsyncComponent 定义一个异步组件，它在运行时是懒加载的。参数可以是一个异步加载函数，或是对加载行为进行更具体定制的一个选项对象。
      file: markRaw(defineAsyncComponent(projectModules[key])),
    };
  }

  return data;
};

export async function loadProjects() {
  const projectModules = import.meta.glob<VueProjectModule>(
    "../components/*/*.vue"
  );

  const projects = await resolveImportGlobModule(projectModules);
  allProjects.value = projects;
}
