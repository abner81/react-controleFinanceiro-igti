import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { Modal } from "react-bootstrap";

import * as S from "./styled";

const ModalComponent = ({
  state,
  handleClose,
  index,
  category,
  date,
  id,
  description,
  value,
}) => {
  const { register, handleSubmit, errors } = useForm();
  const [formData, setFormData] = useState({})
  
  const onSubmit = (data) => setFormData(data);
  console.log(formData);

  const handleFormRequisition = () => {};

  return (
    <Modal show={state} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edição de lançamento</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          <S.ModalLabel>Descrição:</S.ModalLabel>
          <input
            type="text"
            class="form-control"
            name="description"
            defaultValue={description}
            ref={register({ required: true })}
          />
          {errors.description && <S.P>Campo obrigatório</S.P>}
          <S.ModalLabel>Categoria:</S.ModalLabel>
          <input
            type="text"
            class="form-control"
            defaultValue={category}
            name="category"
            ref={register({ required: true })}
          />
          {errors.category && <S.P>Campo obrigatório</S.P>}
          <div class="row">
            <div class="col">
              <S.ModalLabel>Valor:</S.ModalLabel>
              <input
                type="number"
                step="0.01"
                size="10"
                class="form-control"
                defaultValue={value}
                name="value"
                ref={register({ required: true })}
              />
              {errors.value && <S.P>Campo obrigatório</S.P>}
            </div>
            <div class="col">
              <S.ModalLabel>Data:</S.ModalLabel>
              <input
                type="date"
                className="form-control"
                id="date"
                defaultValue={date}
                name="yearMonthDay"
                ref={register({ required: true })}
              />
              {errors.yearMonthDay && <S.P>Campo obrigatório</S.P>}
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleClose}
          >
            Cancelar
          </button>
          <input
            type="submit"
            className="btn btn-primary"
            value="Salvar"
            onClick={handleClose}
          />
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default ModalComponent;
