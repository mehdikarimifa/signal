import type { _Range } from "@/types/_common/Range";

export default interface Signal {
  id: number;
  title: string;
  status: _Range<1, 3>;
  trade_result: string;
  action: _Range<1, 3>;
  type: _Range<1, 10>;
  created_at: string;
  updated_at: string;
  created_at_2: string;
  updated_at_2: string;
}
