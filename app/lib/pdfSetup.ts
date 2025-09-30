import * as pdfjsLib from "pdfjs-dist";

// Point PDF.js to the worker file (must match your installed version)
pdfjsLib.GlobalWorkerOptions.workerSrc =
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export default pdfjsLib;
