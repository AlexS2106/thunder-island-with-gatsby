import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { 
  exercise
} from "./index.module.css";

import Breadcrumbs from "../../../components/navigation/Breadcrumbs";
import Button from "../../../components/buttons/Button";
import IndexRight from "../../../components/layout/indexesWithContent/IndexRight";
import Layout from "../../../components/layout/containers/Layout";
import MainWide from "../../../components/layout/containers/MainWide";
import PageTitle from "../../../components/typography/PageTitle";
import Spacer from "../../../components/layout/spacing/Spacer";


  ////** COMPONENT **////
const ExerciseGetForObtain1 = ( { pageContext } ) => {
  
  ////** STATE **////
  //Initial state for answers
  const exerciseAnswers = [
    {
      id: 0,
      verb: "got",
      correctAnswer: [ "achieved", "received" ],
      userAnswer: "",
      success: false,
    },
    {
      id: 1,
      verb: "get",
      correctAnswer: ["achieve"],
      userAnswer: "",
      success: false,
    },
    {
      id: 2,
      verb: "got",
      correctAnswer: ["bought"],
      userAnswer: "",
      success: false,
    },
    {
      id: 3,
      verb: "get",
      correctAnswer: ["fetch"],
      userAnswer: "",
      success: false,
    },
    {
      id: 4,
      verb: "got",
      correctAnswer: ["received"],
      userAnswer: "",
      success: false,
    },
    {
      id: 5,
      verb: "gets",
      correctAnswer: [ "receives", "takes"],
      userAnswer: "",
      success: false,
    },
    {
      id: 6,
      verb: "got",
      correctAnswer: [ "took", "caught" ],
      userAnswer: "",
      success: false,
    },
    {
      id: 7,
      verb: "got",
      correctAnswer: [ "received" ],
      userAnswer: "",
      success: false,
    },
    {
      id: 8,
      verb: "got",
      correctAnswer: ["caught"],
      userAnswer: "",
      success: false,
    },
    {
      id: 9,
      verb: "got",
      correctAnswer: ["contracted"],
      userAnswer: "",
      success: false,
    },
    {
      id: 10,
      verb: "got",
      correctAnswer: ["received"],
      userAnswer: "",
      success: false,
    },
    {
      id: 11,
      verb: "got",
      correctAnswer: ["take"],
      userAnswer: "",
      success: false,
    },
    {
      id: 12,
      verb: "get",
      correctAnswer: ["fetch"],
      userAnswer: "",
      success: false,
    },
    {
      id: 13,
      verb: "get",
      correctAnswer: ["take"],
      userAnswer: "",
      success: false,
    }
  ];
  //State relative to user interaction with the answer inputs
  const [ submitted, setSubmitted ] = useState( false );
  const [ answers, setAnswers ] = useState( () => { 
    const initialState = exerciseAnswers;
    return initialState;
  } );
  const [ success, setSuccess ] = useState( false );

  ////** CONTEXT **////
  //Breadcrumb state
  const {
    breadcrumb: { crumbs }
  } = pageContext; 

  ////** VARIABLES **////
  //PageTitle
  const pageTitle = "An Exercise For Using Get."

  ////** FUNCTIONS **////
  //Manages change in any of the inputs
  const handleOnChange = ( e ) => {
    const targetAnswer = answers[ e.target.id ];
    targetAnswer.userAnswer = e.target.value;
    targetAnswer.success = targetAnswer.correctAnswer.includes(targetAnswer.userAnswer) ? true : false;
    setAnswers( {
      ...answers
    } );
  };
  //Manages the submit click
  const handleSubmit = ( e ) => {
    e.preventDefault();
    setSubmitted( true );
    const answerArray = Object.values( answers );
    const fails = answerArray.filter( answer => !answer.success );
    fails.length ?  handleFailure(fails) : handleSuccess();
  }
  //Manages events after the successful completion of all answers.
  const handleSuccess = (  ) => {
    setSuccess( true );
  }
  //Manages events after submission when all answers are not correct.
  const handleFailure = (fails) => { 
    setSuccess( false );
  }
  const handleReset = () => { 
    setAnswers( exerciseAnswers );
    setSuccess( false );
    setSubmitted( false ); 
  }
  //Generates each input and its properties.
  const answerInput = ( num ) => { 
    const { id, verb, userAnswer, success } = answers[ num ];
    return (
      <label htmlFor={ num } >
        <input type="text" id={ id } value={ userAnswer } placeholder={ verb } onChange={ handleOnChange } className={ success ? "isCorrect" : "isIncorrect" } style={ submitted && !success ? { backgroundColor: "pink" } : null } />
      </label>
    );
  }

  ////** MARK UP **////
  return (
    <Layout>
      <Spacer size="small" />
      <PageTitle title={ pageTitle } />
      <Spacer size="small" />
      <Breadcrumbs crumbs={ crumbs } />
      <IndexRight>
        <MainWide>
          <div className={ exercise }>
            <p>Often <em>get</em> is used instead of alternative words which all mean obtain.</p>
            <Spacer size="small" />
            <p>In the text below, find all the times <em>got</em> or <em>get</em> is used and replace them with an alternative word.</p>
            <Spacer size="small" />
            <p>Choose an alternative meaning from the verbs listed below, then change the verb into the correct tense.</p>
            <ol>
              <li>To achieve</li>
              <li>To buy</li>
              <li>To fetch</li>
              <li>To receive</li>
              <li>To catch</li>
              <li>To contract</li>
              <li>To take</li>
            </ol>
            <Spacer size="small" />
            <section className="flexColumn">
              <h3>Speech</h3>
              <p>When my son { answerInput( 0 ) } his degree, I was so happy because I knew he had worked so hard for these last three years to { answerInput( 1 ) } it.</p>
              <p>I had saved up all the money I could and { answerInput( 2 ) } him a brand new car as a graduation present. All he had to do was go and { answerInput( 3 ) } it from the car shop. You should???ve seen his face when he { answerInput( 4 ) } it. He was so happy! </p>
              <p>He decided to take a year off then and drive around Europe in his new car. I was a bit worried, I'll be honest with you. But, he???s a sensible boy, he { answerInput( 5 ) } his cleverness from me, so he does. I knew he'd be all right but still, a mother worries! </p>
              <p>He drove South to the seaport and { answerInput( 6 ) } the boat across to France. He spent the next two months travelling around the continent. Every week, I { answerInput( 7 ) } a postcard from him from a different place. He was having such a great time! </p>
              <p>Eventually, I got a phone call. It was him! He told me he was in Italy. He said he???d { answerInput( 8 ) } himself an Italian girlfriend and been offered a job at some firm in Italy. He's signed the contract already, and that company???s { answerInput( 9 ) } him now for a whole year. I was so happy but sad as well! I miss him, you see? Well, in the end, he asked me if I'd { answerInput( 10 ) } a parcel from him yet. Well, I hadn???t. Obviously! So I said no. </p>
              <p>  ???Well, Mum, { answerInput( 11 ) } yourself to the post office and go { answerInput( 12 ) } it.??? He said. And that???s why I???m here! Can I { answerInput( 13 ) } my parcel?</p>
            </section>
            <Spacer size="small" />
            <Button onClick={ handleSubmit } innerText="Submit" />
            { success && <Button onClick={ handleReset } innerText="Reset" /> }
            { submitted && success && <p style={ { fontSize: "2rem", textAlign: "center", padding: "1rem" } }>Congratulations! Points are coming!</p> }
          </div>
        </MainWide>
        <aside className="sideBorderLight sideBorderPad">
          <h3>Lessons on Using Get</h3>
          <Link to={ `/english/using-get/complete-lesson` } className="accentText" activeClassName="isActive" >A complete Lesson On Using Get</Link>
          <Spacer size="small" />
          <h4>Learn In Small Easy Lessons</h4>
          <Link to={ `/english/using-get/mini-lesson-1` } className="accentText" activeClassName="isActive" >Mini Lesson On Using Get Part 1</Link>
        </aside>
      </IndexRight>
    </Layout>
  );
}
  
///////// *** PROP TYPES *** ///////////
ExerciseGetForObtain1.propTypes = {
   pageContext: PropTypes.object.isRequired, 
}

export default ExerciseGetForObtain1;