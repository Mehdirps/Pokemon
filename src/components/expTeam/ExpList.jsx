import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ExpCard from './ExpCard';
import { setExp } from '../../stores/ExpTeamSlice';

const ExpList = () => {
    const expList = useSelector((state) => state.expTeam.list);
    const listLength = useSelector((state) => state.expTeam.listLength);

    let emptyExp = useMemo(() => [], []);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setExp(expList[0]));

    });

    if (listLength > 0) {
        const noExp = 6 - listLength;
        emptyExp = [];
        for (let i = 0; i < noExp; i++) {
            emptyExp.push(<article className="empty-exp" key={i}></article>)

        }
    }

    return (
        <section className="exp-list-container">
            {
                expList.map((item, id) =>
                    <ExpCard key={id} item={item} />
                )
            }
            {emptyExp}
        </section>
    );
};

export default ExpList;