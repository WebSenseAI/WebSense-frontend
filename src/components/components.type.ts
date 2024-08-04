
import { ChartData } from 'chart.js';

type ExtendedDataPoint = [number, number] | null;
type BarChartData = ChartData<"bar", (number | [number, number] | null)[] | ExtendedDataPoint[], unknown>
type PieChartData = ChartData<"pie", number[], unknown>


export type { BarChartData, PieChartData };