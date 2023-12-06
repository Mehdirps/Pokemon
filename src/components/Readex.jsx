import React from 'react';
import ReadexHeader from './readex/ReadexHeader';
import RealisationsList from './readex/RealisationsList';
import { useSelector } from 'react-redux';
import RealisationDetails from './readex/RealisationDetails';

const Readex = () => {
    const readex = useSelector((state) => state.readex.openReadex);
    const showRealisations = useSelector((state) => state.readex.showRealisations);
    const openDetails = useSelector((state) => state.readex.openDetails)

    return (
        <>
            {
                readex ?
                    <section className="readex">
                        <ReadexHeader />
                        {
                            showRealisations || !openDetails ?
                                <RealisationsList />
                                : !showRealisations || openDetails ?
                                    <RealisationDetails />
                                    : ''
                        }
                    </section>
                    : ''
            }

        </>
    );
};

export default Readex;