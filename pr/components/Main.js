import Link from 'next/link';
import * as S from "./Main.styled";
import Logo from '../public/img/PAEI.png';


export default function Main(){
  return (
   <>
      <S.Wrapper>
         <S.Container>
            <S.Title src={Logo} />
            
            <S.Ready>파티할 준비 되셨나요?</S.Ready>
            
            <Link href="/login"><S.Login>로그인</S.Login></Link>
            <S.Ready>아직 회원이 아니세요?</S.Ready>
            <Link href="/signup"><S.Signup>회원 가입 후 파티 참여하기!</S.Signup></Link>
         </S.Container>
      </S.Wrapper>
   </>
    
  );
};

