import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { 

} from "./index.module.css";

import Arrow from "../../../components/typography/Arrow";
import Breadcrumbs from "../../../components/navigation/Breadcrumbs";
import EmphasisContainer from "../../../components/typography/EmphasisContainer";
import IndexRight from "../../../components/layout/indexesWithContent/IndexRight";
import Layout from "../../../components/layout/containers/Layout";
import MainWide from "../../../components/layout/containers/MainWide";
import PageTitle from "../../../components/typography/PageTitle";
import Spacer from "../../../components/layout/spacing/Spacer";


  ////** COMPONENT **////
const CompleteLesson = ( { pageContext } ) => {

  ////** STATE & CONTEXT **////
  //Breadcrumb context
  const {
    breadcrumb: { crumbs }
  } = pageContext;

  ////** VARIABLES **////
  //PageTitle
  const pageTitle = "A Full Lesson On The Way Native English Speakers Use Get and Got During Informal Speech.";

  ////** MARK UP **////
  return (
    <Layout>
      <Spacer size="small" />
      <PageTitle title={ pageTitle } size="long" />
      <Spacer size="small" />
      <Breadcrumbs crumbs={ crumbs } />
      <Spacer size="medium" />
      <IndexRight>
        <MainWide>
          <EmphasisContainer>
            <p>In most cases, get is used instead of another, more formal, verb.</p>
            <p>Get is used a lot when speaking but not much in writing.</p>
          </EmphasisContainer>
          <Spacer size="medium" />
          <p>Look at the examples below: in each sentence get is used instead of a more formal verb. Each alternative verb has a meaning like obtain.</p>
          <Spacer size="medium" />
          <section className="flexColumn">
            <h3 className="shadowText">Use 'Get' To Obtain Something</h3>
            <section className="flexColumn">
              <h4 className="shadowText">Buy</h4>
              <ul>
                <li>Shall we buy some fruit? <Arrow type="x2" direction="right" color="dark" /> Shall we get some fruit?</li>
                <li>They bought a new pet. <Arrow type="x2" direction="right" color="dark" /> They got a new pet.</li>
                <li>I'm buying a new sofa! <Arrow type="x2" direction="right" color="dark" /> I'm getting a new sofa!</li>
              </ul>
            </section>
            <Spacer size="small" />
            <section className="flexColumn">
              <h4 className="shadowText">Receive</h4>
              <ul>
                <li>I received a lovely necklace for my birthday. <Arrow type="x2" direction="right" color="dark" /> I got a lovely necklace for my birthday.</li>
                <li>That new movie is receiving really great reviews. <Arrow type="x2" direction="right" color="dark" /> That new movie is getting really great reviews.</li>
                <li>Did you receive the email I sent? <Arrow type="x2" direction="right" color="dark" /> Did you get the email I sent?</li>
              </ul>
            </section>
            <Spacer size="small" />
            <section className="flexColumn">
              <h4 className="shadowText">Fetch</h4>
              <ul>
                <li>Go and fetch it! <Arrow type="x2" direction="right" color="dark" /> Go and get it!</li>
                <li>Could you fetch some wine? <Arrow type="x2" direction="right" color="dark" /> Could you get some wine?</li>
                <li>Let me fetch my phone. <Arrow type="x2" direction="right" color="dark" /> Let me get my phone.</li>
              </ul>
            </section>
            <Spacer size="small" />
            <section className="flexColumn">
              <h4 className="shadowText">Catch (a thing)</h4>
              <ul>
                <li>I caught the ball! <Arrow type="x2" direction="right" color="dark" /> I got the ball!</li>
                <li>Catch it! <Arrow type="x2" direction="right" color="dark" /> Get it!</li>
                <li>The goalkeeper said he will catch it! <Arrow type="x2" direction="right" color="dark" /> The goalkeeper said he will get it!</li>
              </ul>
            </section>
            <Spacer size="small" />
            <section className="flexColumn">
              <h4 className="shadowText">Catch (a person)</h4>
              <ul>
                <li>I liked him for so long, and I caught him! <Arrow type="x2" direction="right" color="dark" /> I liked him for so long, and now I got him!</li>
                <li>He caught himself a great wife! <Arrow type="x2" direction="right" color="dark" /> He got himself a great wife!</li>
                <li>They caught the thieves. <Arrow type="x2" direction="right" color="dark" /> They got the theives.</li>
              </ul>
            </section>
            <Spacer size="small" />
            <section className="flexColumn">
              <h4 className="shadowText">Achieve</h4>
              <ul>
                <li>He achieved his degree. <Arrow type="x2" direction="right" color="dark" /> He got his degree.</li>
                <li>They achieved three goals in their last game against Germany. <Arrow type="x2" direction="right" color="dark" /> They got three goals in their last game against Germany.</li>
                <li>She achieved great grades this year. <Arrow type="x2" direction="right" color="dark" /> She got great grades this year.</li>
              </ul>
            </section>
            <Spacer size="small" />
            <section className="flexColumn">
              <h4 className="shadowText">Contract (obtain a service)</h4>
              <ul>
                <li>We've contracted him for the length of this contract. <Arrow type="x2" direction="right" color="dark" /> We’ve got him for the length of this contract.</li>
                <li>He's contracted us for the rest of the day. <Arrow type="x2" direction="right" color="dark" /> He’s got us for the rest of the day.</li>
                <li>She will contract him for next week. <Arrow type="x2" direction="right" color="dark" /> She will get him for next week.</li>
              </ul>
            </section>
            <Spacer size="small" />
            <section className="flexColumn">
              <h4 className="shadowText">Take (also catch)</h4>
              <ul>
                <li>She took a plane to France. <Arrow type="x2" direction="right" color="dark" /> She gets a plane to France.</li>
                <li>We can take a taxi back to the hotel. <Arrow type="x2" direction="right" color="dark" /> We can get a taxi back to the hotel.</li>
                <li>i will take the train home. <Arrow type="x2" direction="right" color="dark" /> I will get the train home.</li>
              </ul>
            </section>
            <Spacer size="small" />
            <section className="flexColumn">
              <h4 className="shadowText">Take (also catch)</h4>
              <ul>
                <li>She took a plane to France. <Arrow type="x2" direction="right" color="dark" /> She gets a plane to France.</li>
                <li>We can take a taxi back to the hotel. <Arrow type="x2" direction="right" color="dark" /> We can get a taxi back to the hotel.</li>
                <li>i will take the train home. <Arrow type="x2" direction="right" color="dark" /> I will get the train home.</li>
              </ul>
            </section>
          </section>
          <Spacer size="medium" />
          <section className="flexColumn">
            <h3 className="shadowText">Use 'Get' For A Change Of Emotion Or State</h3>
            <section>
              <h4 className="shadowText">Become</h4>
              <ul>
                <li>Don't you think it's becoming colder? <Arrow type="x2" direction="right" color="dark" /> Don't you think it's getting colder?</li>
                <li>Your dog has become better. <Arrow type="x2" direction="right" color="dark" /> Your dog has got better.</li>
                <li>Please don't become angry with me. <Arrow type="x2" direction="right" color="dark" /> Please don't get angry with me.</li>
              </ul>
            </section>
            <Spacer size="small" />
            <section>
              <h4 className="shadowText">Contract (become ill)</h4>
              <ul>
                <li>o	They contracted some horrible disease while they were travelling. <Arrow type="x2" direction="right" color="dark" /> They got some horrible disease while they were travelling. </li>
                <li>He’s contracted covid. <Arrow type="x2" direction="right" color="dark" /> He’s got covid.</li>
                <li>I have sent Tom home sick before everyone contracts his cold. <Arrow type="x2" direction="right" color="dark" /> I have sent Tom home sick before everyone gets his cold.</li>
              </ul>
            </section>
          </section>
          <Spacer size="medium" />
          <section className="flexColumn" >
            <h3 className="shadowText">Use 'Get' To Arrive Somewhere</h3>
            <section>
              <h4 className="shadowText">Arrive</h4>
              <ul>
                <li>She arrived there in the afternoon. <Arrow type="x2" direction="right" color="dark" /> She got there in the afternoon.</li>
                <li>They didn't arrive Germany yet. <Arrow type="x2" direction="right" color="dark" /> They didn't get to Germany yet.</li>
                <li>I arrived at work late because of the snow. <Arrow type="x2" direction="right" color="dark" /> I got to work late because of the snow.</li>
              </ul>
            </section>
          </section>
          <Spacer size="medium" />
          <section className="flexColumn">
            <h3 className="shadowText">Use 'Get' To Show Understanding</h3>
            <section>
              <h4 className="shadowText">Understand</h4>
              <ul>
                <li>He understood the joke. <Arrow type="x2" direction="right" color="dark" /> He got the joke.</li>
                <li>I understand it. <Arrow type="x2" direction="right" color="dark" /> I get it.</li>
                <li>o	They will understand it if you explain slowly. <Arrow type="x2" direction="right" color="dark" /> They will get it if you explain slowly.</li>
              </ul>
            </section>
          </section>
          <Spacer size="medium" />
          <section className="flexColumn">
            <h3 className="shadowText">Use 'Get' For An Experience</h3>
            <section>
              <h4 className="shadowText">Experience</h4>
              <ul>
                <li>John's just experienced a great idea! <Arrow type="x2" direction="right" color="dark" /> John's just got a great idea!</li>
                <li>She experiences travel sickness. <Arrow type="x2" direction="right" color="dark" /> She gets travel sick.</li>
                <li>He will gain experience from an internship. <Arrow type="x2" direction="right" color="dark" /> He will get experience from an internship. </li>
              </ul>
            </section>
          </section>
          <Spacer size="medium" />
          <section className="flexColumn">
            <h3 className="shadowText">Use 'Get' To Indicate Something Is Made To Happen Or Someone Is Being Forced To Make Something Happen</h3>
            <section>
              <h4 className="shadowText">Make/Force (someone to do something)</h4>
              <ul>
                <li>They finally got me to buy a new computer. <Arrow type="x2" direction="right" color="dark" /> They finally got me to buy a new computer.</li>
                <li>My wife got me to pay attention to the speaker. <Arrow type="x2" direction="right" color="dark" /> My wife got me to pay attention to the speaker.</li>
                <li>The employees got the manager to agree to new terms. <Arrow type="x2" direction="right" color="dark" /> The employees got the manager to agree to new terms.</li>
              </ul>
            </section>
            <Spacer size="medium" />
            <section className="flexColumn">
              <h4 className="shadowText">Make (something happen)</h4>
              <ul>
                <li>We're renewing the passports before our holiday. <Arrow type="x2" direction="right" color="dark" /> We're getting the passports renewed before our holiday.</li>
                <li>We have fixed the car. <Arrow type="x2" direction="right" color="dark" /> We got the car fixed.</li>
                <li>He will be done (be finished) by tomorrow. <Arrow type="x2" direction="right" color="dark" /> He will get it done by tomorrow.</li>
              </ul>
            </section>
          </section>
          <Spacer size="medium" />
          <section className="flexColumn">
            <h3 className="shadowText">Use To Get For An Act Of Revenge</h3>
            <section>
              <h4 className="shadowText">Obtain revenge on</h4>
              <ul>
                <li>We'll obtain revenge on them! <Arrow type="x2" direction="right" color="dark" /> We'll get them! </li>
                <li>Are you going to obtain revenge on me in return? <Arrow type="x2" direction="right" color="dark" /> Are you going to get me back?</li>
                <li>Just wait until I obtain revenge on you! <Arrow type="x2" direction="right" color="dark" /> Just wait until I get you!</li>
              </ul>
            </section>
          </section>
          <Spacer size="medium" />
          <section className="flexColumn">
            <h3 className="shadowText">Use 'Get' Instead Of The Verb 'To Be' When The Sentence Structure Is Object Then Verb (passive voice)</h3>
            <section>
              <h4 className="shadowText">Was</h4>
              <ul>
                <li>Their car was stolen last night. <Arrow type="x2" direction="right" color="dark" /> Their car got stolen last night. </li>
                <li>The company's new website was finished. <Arrow type="x2" direction="right" color="dark" /> The company's new website got finished.</li>
                <li>The ball was thrown really far. <Arrow type="x2" direction="right" color="dark" /> The ball got thrown really far.</li>
              </ul>
            </section>
          </section>
          <Spacer size="medium" />
          <section className="flexColumn">
            <h3 className="shadowText">Phrasal Verbs With Get</h3>
            <p>There are many, many phrasal verbs using get. Here are those you are most likely to hear.</p>
            <section>
              <h4 className="shadowText">Get about</h4>
              <h5>To be mobile</h5>
              <ul>
                <li>He can get about a lot more since he bought an electric wheelchair.</li>
                <li>	If we get the day tickets, it will let us go anywhere, and we can get about the city a lot more.</li>
              </ul>
            </section>
            <section>
              <h4 className="shadowText">Get across</h4>
              <h5>To successfully communicate an idea.</h5>
              <ul>
                <li>I'm not sure he got his view across in that meeting.</li>
                <li>If I can get my point across, I am sure you will agree.</li>
              </ul>
              <h5>To Cross from one side to another.</h5>
              <ul>
                <li>Can we get across the river here?</li>
                <li>We got across the road when the traffic lights turned red.</li>
              </ul>
            </section>
            <section>
              <h4 className="shadowText">Get ahead</h4>
              <h5>Do better than.</h5>
              <ul>
                <li>If we can finish this today, we will get ahead of our timeline..</li>
                <li>	I want to get ahead in my career.</li>
              </ul>
            </section>
            <section>
              <h4 className="shadowText">Get around to</h4>
              <h5>To start something. (Usually, this is something you don't really want to do.).</h5>
              <ul>
                <li>I'll get around to the cleaning later.</li>
                <li>When I have the time, I will also get around to your problem.</li>
              </ul>
            </section>
            <section>
              <h4 className="shadowText">Get at</h4>
              <h5>To repeatedly criticise someone.</h5>
              <ul>
                <li>You're getting at me!</li>
                <li>The manager really got at John in the meeting. It was really unfair!</li>
              </ul>
            </section>
            <section>
              <h4 className="shadowText">Get away</h4>
              <h5>Successfully leave after a crime.</h5>
              <ul>
                <li>The getaway car was abandoned nearby.</li>
                <li>The thief got away with the money.</li>
              </ul>
              <h4 className="shadowText">Get away with</h4>
              <h5>Do something and not be caught or punished.</h5>
              <ul>
                <li>He stole the money and got away with it.</li>
                <li>I get away with doing as little as possible at work..</li>
              </ul>
            </section>
            <section>
              <h4 className="shadowText">Get back</h4>
              <h5>Return to a place or person.</h5>
              <ul>
                <li>We should get back by 7:30.</li>
                <li>She got him back.</li>
              </ul>
              <h5>Move backwards(often as a warning).</h5>
              <ul>
                <li>The car's on fire! Get back!</li>
                <li>You're too close. Get back.</li>
              </ul>
            </section>
            <section>
              <h4 className="shadowText">Get behind</h4>
              <h5>Become late with paying for something. (Also 'fell behind'.)</h5>
              <ul>
                <li>If you get behind with your payments, you can lose the car.</li>
                <li>She couldn't work this month and got behind with her bills.</li>
              </ul>
            </section>
            <section>
              <h4 className="shadowText">Get by</h4>
              <h5>Manage with difficulty.</h5>
              <ul>
                <li>My English isn't good, but I know enough to get by on holiday.</li>
                <li>	Money is tight; they only just get by.</li>
              </ul>
            </section>
            <section>
              <h4 className="shadowText">Get in</h4>
              <h5>Enter a house, car, swimmming pool or container.</h5>
              <ul>
                <li>Get in the car!</li>
                <li>The water in the swimming pool is so warm! You should get in!</li>
              </ul>
              <h4 className="shadowText">Get out</h4>
              <h5>Exit a house, car, swimmming pool or container.</h5>
              <ul>
                <li>We should get out of the car!</li>
                <li>Get out of my house!</li>
              </ul>
            </section>
            <section>
              <h4 className="shadowText">Get on</h4>
              <h5>Enter a bus, train, plane, bike or boat.</h5>
              <ul>
                <li>Let's get on the bus.</li>
                <li>We are getting on the plane now!</li>
              </ul>
              <h4 className="shadowText">Get off</h4>
              <h5>Exit a bus, train, plane, bike or boat.</h5>
              <ul>
                <li>Get off my bike!</li>
                <li>Let's get off the boat.</li>
              </ul>
            </section>
            <section>
              <h4 className="shadowText">Get off</h4>
              <h5>Stop</h5>
              <ul>
                <li>	Can I get off work early? I need to collect my kids.</li>
                <li>	Don't touch me! Get off! </li>
              </ul>
            </section>
            <section>
              <h4 className="shadowText">Get on</h4>
              <h4>Get along with</h4>
              <h5>Have a good relationship with someone.</h5>
              <ul>
                <li>Did you get along with him?</li>
                <li>The team just didn't get on together. </li>
              </ul>
            </section>
            <section>
              <h4 className="shadowText">Getting on</h4>
              <h5>Becoming older.</h5>
              <ul>
                <li>It's my 60th birthday next month. I'm getting on a bit.</li>
                <li>My parents are getting on, they can't manage like they used to.</li>
              </ul>
              <h5>Time is becoming late.</h5>
              <ul>
                <li>It's getting on for 4pm, I have to leave soon.</li>
                <li>It's getting on a bit, you will have to go home.</li>
              </ul>
            </section>
            <section>
              <h4 className="shadowText">Get out</h4>
              <h5>Leave</h5>
              <ul>
                <li>If there is a fire, get out by the nearest exit.</li>
                <li>She gets out of prison next week.</li>
              </ul>
            </section>
            <section>
              <h4 className="shadowText">Get out of</h4>
              <h5>Avoid doing something you don't want to do.</h5>
              <ul>
                <li>I told my teacher I was ill and I got out of doing the exam today.</li>
                <li>I got out of cleaning my room.</li>
              </ul>
              <h5>Leave a bad relationship.</h5>
              <ul>
                <li>Once I got out of my marriage, I was happy..</li>
                <li>Once he got out of that relationship, he went abroad.</li>
              </ul>
            </section>
            <section>
              <h4 className="shadowText">Get over</h4>
              <h5>Recover from an illness or a bad situation.</h5>
              <ul>
                <li>I was really sick, but I've got over it now.</li>
                <li>They divorced recently, but she got over it quickly.</li>
              </ul>
            </section>
            <section>
              <h4 className="shadowText">Get rid of</h4>
              <h5>Throw someone or something away</h5>
              <ul>
                <li>	I need to get rid of my old clothes.</li>
                <li>She needs to get rid of him. He is jealous all the time.</li>
              </ul>
            </section>
            <section>
              <h4 className="shadowText">Get stuck</h4>
              <h5>delayed</h5>
              <ul>
                <li>I'm late because I got stuck in traffic.</li>
                <li>John's probably got stuck in the office; we were very busy today.</li>
              </ul>
            </section>
            <section>
              <h4 className="shadowText">Get through</h4>
              <h5>Make contact</h5>
              <ul>
                <li>Mary says she can't get through to Joe. Is his phone ringing?</li>
                <li>I couldn't get through. I will try to speak to them later.</li>
              </ul>
            </section>
            <section>
              <h4 className="shadowText">Get through to</h4>
              <h5>Communicate an understanding</h5>
              <ul>
                <li>My son and I always seem to be arguing nowadays; I cannot get through to him.</li>
                <li>I have had enough! I tried to get through to her, but she won't listen to me.</li>
              </ul>
            </section>
            <section>
              <h4 className="shadowText">Get to</h4>
              <h5>Reach a place.</h5>
              <ul>
                <li>When I get to the end of this page, I will stop.</li>
                <li>They get to the halfway point soon.  </li>
              </ul>
            </section>
            <section>
              <h4 className="shadowText">Get up</h4>
              <h5>Leave your bed after waking.</h5>
              <ul>
                <li>I got up at 7:30.</li>
                <li>What time are you getting up tomorrow? </li>
              </ul>
              <h5>From a chair or the floor.</h5>
              <ul>
                <li>Get up from the chair because I need to move it.</li>
                <li>Get up! The floor's dirty!</li>
              </ul>
            </section>
            <section>
              <h4 className="shadowText">Get up to</h4>
              <h5>Do</h5>
              <ul>
                <li>What did you get up to this weekend?</li>
                <li>She looks tired; I wonder what she got up to last night…</li>
              </ul>
            </section>
            <section>
              <h4 className="shadowText">Get used to</h4>
              <h5>Adjust to something</h5>
              <ul>
                <li>It's really hot here, but you get used to it.</li>
                <li>I got used to working at night.</li>
              </ul>
            </section>
            <section>
              <h4 className="shadowText">Get wound up</h4>
              <h5>Get angry</h5>
              <ul>
                <li>He always gets wound up when he talks about politics.</li>
                <li>The kids have got her really wound up today.</li>
              </ul>
            </section>
            <section>
              <h4 className="shadowText">Have got</h4>
              <h5>Used as 'to have'. (It is always 'have got', never 'have get'.)</h5>
              <ul>
                <li>She has got a new car.</li>
                <li>Have you got any brothers and sisters?</li>
              </ul>
            </section>
          </section>
        </MainWide>
        <aside className="sideBorderDark sideBorderPad">
          <h3 className="shadowText">Exercises On Using Get</h3>
          <Spacer size="small" />
          <Link to={ `/english/using-get/exercise-2` } className="accentText" activeClassName="isActive" >Advanced Lesson On Using Get</Link>
        </aside>
      </IndexRight>
    </Layout>
  );
}

////** PROP TYPES **////
CompleteLesson.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default CompleteLesson;













