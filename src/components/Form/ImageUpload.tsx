import React from 'react';
import { useField } from 'formik';
import { Button, Spin } from 'antd';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { get } from 'lodash';
import {
  LoadingOutlined,
  CloudUploadOutlined,
  CloseOutlined,
} from '@ant-design/icons';

import StyleWrapper from './form.style';

export default ({
  formik,
  required,
  uploading,
  label,
  imageSource,
  onUpload,
  onRemove,
  multiple,
  onDragEnd,
  onImageClick,
  primaryImage,
  ...props
}: any): JSX.Element => {
  const [field, meta] = useField(props);

  const { error, touched, value } = meta;
  const { name, fielderror } = props;

  return (
    <StyleWrapper
      className={`input upload-input ${value ? 'hasValue' : ''} ${
        (touched && error) || fielderror ? 'hasError' : ''
      }`}
    >
      {label && (
        <label htmlFor={name}>
          {label} {required && <span className="req-sign">*</span>}
        </label>
      )}

      {!multiple && imageSource ? (
        <button type="button" className="remove-image" onClick={onRemove}>
          <CloseOutlined />
        </button>
      ) : (
        ''
      )}

      <Button disabled={uploading} className="upload--area">
        <input
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          data-test-id={name}
          {...props}
          {...field}
          multiple={multiple}
          onChange={onUpload}
        />

        {uploading && (
          <div className="loading">
            <Spin
              indicator={<LoadingOutlined style={{ fontSize: 30 }} spin />}
              className="spinner"
            />
          </div>
        )}

        {multiple ? (
          <CloudUploadOutlined style={{ color: '#333', fontSize: '24px' }} />
        ) : (
          <>
            {imageSource ? (
              <div className="image--source">
                <img src={imageSource} alt="" />
              </div>
            ) : (
              <CloudUploadOutlined
                style={{ color: '#333', fontSize: '24px' }}
              />
            )}
          </>
        )}
      </Button>

      {multiple && imageSource && (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable" direction="horizontal">
            {(provided: any, snapshot: any) => (
              <div
                className="images--list"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {imageSource ? (
                  imageSource.map((image: any, index: any) => (
                    <Draggable
                      key={image.id}
                      draggableId={image.id.toString()}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          className="list--innerbox"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <button
                            type="button"
                            className="remove-image"
                            onClick={() => onRemove(image.id)}
                          >
                            <CloseOutlined />
                          </button>
                          <div className="list--item">
                            <img src={get(image, 'urls.360', '')} alt="" />
                          </div>
                          <div className="set--primary">
                            <Button
                              disabled={
                                !primaryImage.includes(image.id) &&
                                primaryImage.length === 2
                              }
                              className={`${
                                image.primary ? 'is-primary' : ''
                              } ${
                                !primaryImage.includes(image.id) &&
                                primaryImage.length === 2
                                  ? 'disabled'
                                  : ''
                              }`}
                              onClick={() => onImageClick(image.id)}
                            >
                              <span className="checkbox" />
                              Primary
                            </Button>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))
                ) : (
                  <CloudUploadOutlined
                    style={{ color: '#333', fontSize: '24px' }}
                  />
                )}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}

      {touched && error && (
        <div className="text-danger">
          <span className="text-danger--text">{error}</span>
        </div>
      )}

      {fielderror && (
        <div className="text-danger field-error">
          <span className="text-danger--text">{fielderror}</span>
        </div>
      )}
    </StyleWrapper>
  );
};
