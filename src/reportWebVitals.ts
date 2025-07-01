import {
  onCLS,
  onINP,
  onLCP,
  onTTFB,
  onFCP,
  type Metric
} from 'web-vitals';

type ReportHandler = (metric: Metric) => void;

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    onCLS(onPerfEntry);
    onINP(onPerfEntry);    // ✅ replaced onFID
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
    onFCP(onPerfEntry);
  }
};

export default reportWebVitals;





