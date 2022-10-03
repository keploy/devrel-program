import React from 'react';
import learn from '../assets/images/learn.gif';
import grow from '../assets/images/grow.gif';
import content from '../assets/images/content.gif';
import './Details.css'; 

const Details = () => {
    return (
        <>
            <section id="Details" className="container section">
                <div className="DetailsContainer">
                    <h2 className="DetailsHeader">What's in it for you?</h2>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="row ps-lg-5">
                            <div className="detailscontentpics">
                                <img src={learn} className="DetailsPic" alt="" />
                            </div>
                                <div className="DetailsColumnContent row">
                                    <h2 className="m-0 DetailsColumnContentHeader">Learn</h2>
                                    <div className="DetailsColumnContentText">
                                        <p>Learn the day-to-day tasks of a DevRel</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="row ps-lg-5">
                                <div className="detailscontentpics">
                                    <img src={content}  className="DetailsPic py-3 mt-5" alt="" />
                                </div>
                                <div className=" DetailsColumnContent">
                                    <h2 className="m-0 DetailsColumnContentHeader">Make Content</h2>
                                    <div className="DetailsColumnContentText">
                                        <p>Learn to write and make Technical content (2nd most important task of being a DevRel)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="row ps-lg-5">
                                <div className="detailscontentpics">
                                    <img src={grow} className="DetailsPic" alt="" />
                                </div>
                                <div className="DetailsColumnContent">
                                    <h2 className="m-0 DetailsColumnContentHeader">Grow</h2>
                                    <div className="DetailsColumnContentText">
                                        <p>If a DevRel person is an actor, the community is their stage. Learn to grow with the community</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Details;