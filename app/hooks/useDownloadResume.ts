import { generateResumePdf } from "../utils/generateResumePdf";

export function useDownloadResume() {
  return () => {
    generateResumePdf();
  };
}
