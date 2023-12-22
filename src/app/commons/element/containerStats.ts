export const containerStats = (stats: string) => {
  switch (stats) {
    case "grass":
      return "bg-[#d6f5c6]";
    default:
      return "bg-neutral-300";
  }
};
