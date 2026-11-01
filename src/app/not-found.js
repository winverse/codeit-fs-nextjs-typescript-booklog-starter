import Link from "next/link";
import { Panel } from "@/components/Panel";

export default function NotFound() {
  return (
    <Panel title="책을 찾을 수 없습니다">
      <p>주소를 다시 확인해 주세요.</p>
      <Link href="/">목록으로 돌아가기</Link>
    </Panel>
  );
}
