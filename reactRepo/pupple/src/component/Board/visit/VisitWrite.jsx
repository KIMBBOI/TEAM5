import React from 'react';
import styled from 'styled-components';

const StyledVisitWriteDiv = styled.div`
    width: 100%;
    height: 100%;

    .wrap {
        width: 100%;
        height: 100%;
        margin: 0;
        padding-top: 8px;
    }

    div {
        margin-bottom: 15px;
    }

    label {
        margin-bottom: 5px;
        display: inline-block;
        max-width: 100%;
        font-weight: normal;
    }

    i {
        display: inline-block;
        width: 5px;
        height: 5px;
        background: #f25656;
        border-radius: 50%;
        margin-left: 5px;
        vertical-align: 2px;
    }

    input {
        width: 100%;
        height: 34px;
        padding: 6px 12px;
        display: block;
        border-radius: 0;
        border: 1px solid #ccc;
    }

    & > div > div {
        margin-top: 8px;
        margin-top: 0;
    }

    /* input[type=date] 설정 */
    input[type=date]::before {
        content: attr(data-placeholder);
        width: 100%;
    }
    input[type=date]:focus::before,
    input[type=date]:valid::before {
        display: none;
    }
    input[type=date] {
        width: 100%;
    }

    /* input[type=time] 설정 */
    input[type=time]::before {
        content: attr(time-placeholder);
        width: 100%;
    }
    input[type=time]:focus::before,
    input[type=time]:valid::before {
        display: none;
    }
    input[type=time] {
        width: 100%;
    }

    .datetime {
        width: 48%;
        display: inline-block;
    }
    #datetime2 {
        margin-left: 4%;
    }

`;

const VisitWrite = () => {
    return (
        <StyledVisitWriteDiv>
            <div className='wrap'>
                <form action="">
                    <div>
                        <label for='name'>
                            이름
                            <i aria-hidden="true"></i>
                        </label>
                        <input type="text" name='name' id='name'/>
                    </div>
                    <div>
                        <label for='phoneNumber'>
                            연락처
                            <i></i>
                        </label>
                        <input type="number" name='phoneNumber' id='phoneNumber'/>
                    </div>
                    <div>
                        <label for='reservationData'>
                            방문희망 날짜
                            <i></i>
                        </label>
                        <div>
                            <div className='datetime'>
                                <input 
                                    type="date" 
                                    name='reservationData' 
                                    id='reservationData' 
                                    data-placeholder='년/월/일' 
                                    required // 형식대로 잘 입력되었을 떄 placeholder 가 안보임
                                    aria-required='true' 
                                />
                            </div>
                            <div className='datetime' id='datetime2'>
                                <input type="time" time-placeholder='시/분' required aria-required='true'/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </StyledVisitWriteDiv>
    );
};

export default VisitWrite;