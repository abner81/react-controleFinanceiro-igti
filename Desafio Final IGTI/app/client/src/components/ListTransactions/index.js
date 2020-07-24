import React from 'react'

import * as S from './styled'
import Modal from './Modal'

export default function ListTransaction() { 
  return (
    <S.ListWrapper className="container">
      <Modal />
      <S.ListLeftDiv>
        <S.ListDay>01</S.ListDay>
        <S.ListInfoDiv>
          <S.ListCategory>Projeto</S.ListCategory>
          <S.ListDescription>
            Custo com desenvolvedor front-end
          </S.ListDescription>
        </S.ListInfoDiv>
      </S.ListLeftDiv>

      <S.ListRigthDiv>
        <S.ListPrice type="+">R$ 353,59</S.ListPrice>
        <S.ListButtonModal
          type="button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          <S.ListIconPencil />
        </S.ListButtonModal>
        <S.ListButtonModal>
        <S.ListIconDelete />
        </S.ListButtonModal>
      </S.ListRigthDiv>
    </S.ListWrapper>
  );
}
