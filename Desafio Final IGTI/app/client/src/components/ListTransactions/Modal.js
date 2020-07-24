import React from "react";

import PERIOD from "../../helpers/period";
import { Form } from "react-bootstrap";

import * as S from "./styled";

const Modal = () => (
  <S.ModalWrapper
    className="modal fade"
    id="exampleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h2
            className="modal-title"
            id="exampleModalLabel"
            style={{ fontSize: "1.4rem" }}
          >
            Edição de lançamento
          </h2>
          <S.ModalButtonClose
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </S.ModalButtonClose>
        </div>

        <S.ModalBodyWrapper className="modal-body">
          <S.ModalDivInputs>
            <S.ModalLabel for="formGroupExampleInput">Descrição:</S.ModalLabel>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
            />
          </S.ModalDivInputs>

          <S.ModalDivInputs>
            <S.ModalLabel for="formGroupExampleInpu">Categoria:</S.ModalLabel>
            <input type="text" class="form-control" id="formGroupExampleInpu" />
          </S.ModalDivInputs>

          <S.ModalDivInputs>
            <div class="row">
              <div class="col">
                <S.ModalLabel for="formGroupExampleIn">Valor:</S.ModalLabel>
                <input
                  type="number"
                  step="0.01"
                  size="10"
                  class="form-control"
                  id="formGroupExampleIn"
                />
              </div>
              <div class="col">
                <S.ModalLabel for="formGroupExampleI">Data:</S.ModalLabel>
                <Form.Control as="select">
                  {PERIOD.map((period, index) => {
                    return <option key={index}>{period}</option>;
                  })}
                </Form.Control>
              </div>
            </div>
          </S.ModalDivInputs>
        </S.ModalBodyWrapper>

        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            className="btn btn-primary"
            data-dismiss="modal"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </S.ModalWrapper>
);

export default Modal;
