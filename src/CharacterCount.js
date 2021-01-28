import { useRecoilValue } from 'recoil';
import { charCountState } from './atoms';

export default function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}
