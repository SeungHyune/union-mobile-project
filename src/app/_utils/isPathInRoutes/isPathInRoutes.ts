const createRegexFromPattern = (pattern: string) => {
  const regexString = pattern.replace(/\*/g, ".*");
  return new RegExp(`^${regexString}$`);
};

const isPathInRoutes = (routes: string[], currentPath: string) => {
  return routes.some((route) =>
    createRegexFromPattern(route).test(currentPath),
  );
};

export default isPathInRoutes;
