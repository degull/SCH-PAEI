import Link from 'next/link';
import * as S from "./Navbar.styled";


export default function Navbar(){
  return (
   <>
      <S.Wrapper>
         <li>
         <Link href="/">홈</Link>
         </li>
      </S.Wrapper>
   </>
    
  );
};

