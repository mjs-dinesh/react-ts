import React from 'react';
import './table.component.scss';
import Assets from 'imports/assets.import';
import { getNestedObjectValue } from 'utils/functions.utils';
import moment from "moment";

interface tableProps {
  data?: any;
  loading?: boolean;
  theads: { head: string; key: string; type?: string; isNested?: boolean }[];
  link: string;
  actions?: { icon: string; onClick: any, text?: string, textBackground?: string, hideIcon?: boolean }[];
  imageKey?: string;
}
export default function Table(props: tableProps) {
  const { theads, data, actions, imageKey = ''} = props;

  return (
    <div className="table_container">
      <div className="table_wrapper">
        <div className="table_head">
          <div className="table_row">
            {theads.map((head) => (
              <div className="table_cell table_head_text">{head.head}</div>
            ))}
            <div className="table_cell"></div>
          </div>
        </div>
        <div className="table_body">
          {
            data.length === 0 && 
            <div className="no_data_found">
              No data found
            </div>
          }
          {data.map((item: any, index: number) => (
            <div className="table_row">
              {theads.map((head, index) =>
                index === 0 ? (
                  <div className="table_cell">
                    <div className="table_cell_image_wrapper">
                      <div className="table_cell_image_container">
                        {/* <img
                          src={
                            item[imageKey] ||
                            'https://www.gstatic.com/webp/gallery/4.sm.jpg'
                          }
                          className="table_cell_image"
                        /> */}
                      </div>

                      <div className="body1">
                        {head.isNested
                          ? getNestedObjectValue(item, head.key)
                          : item[head.key]}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="table_cell body1">
                    {head.isNested
                      ? getNestedObjectValue(item, head.key)
                      : head.type === "date" ? moment(item[head.key]).format("LL")
                      : item[head.key]}
                  </div>
                ),
              )}
              <div className="table_cell">
                <div className="action_wrapper">
                  {actions?.map(({ icon, onClick, text, textBackground, hideIcon }) => (
                    <div className="action_button_container">
                      <div
                        className="action_btn_wrapper"
                        onClick={() => onClick(item)}>
                          {
                          !hideIcon &&
                          <div className={`action_btn`}>
                            <img
                              src={Assets[icon]}
                              width={25}
                              height={25}
                              alt="view"
                            />
                          </div>
                          }
                        {text && <div style={{ backgroundColor: textBackground}} className="action_btn_text">{text}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
