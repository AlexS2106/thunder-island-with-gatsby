import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { 
  list
} from "./index.module.css";

import Breadcrumbs from "../../../components/navigation/Breadcrumbs";
import EmphasisContainer from "../../../components/typography/EmphasisContainer";
import EmphasisContainerMinor from "../../../components/typography/EmphasisContainerMinor";
import IndexRight from "../../../components/layout/indexesWithContent/IndexRight";
import Layout from "../../../components/layout/containers/Layout";
import MainWide from "../../../components/layout/containers/MainWide";
import PageTitle from "../../../components/typography/PageTitle";
import Spacer from "../../../components/layout/spacing/Spacer";


  ////** COMPONENT **////
const AdvancedLesson = ( { pageContext } ) => {
  
  ////** STATE **////

  ////** CONTEXT **////
  //Breadcrumb context
    const {
    breadcrumb: { crumbs }
  } = pageContext;

  ////** VARIABLES **////
  //PageTitle
  const pageTitle = "Second Conditional Advanced Lessson";
  //Tooltip
  const tooltip = "";

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
          <article>
            <section className="flexColumn">
              <h3 className="shadowText" >What is the second conditional?</h3>
              <p>An <span className={ tooltip } title="Not true">unreal</span> <span className={ tooltip } title="A situation or action.">condition</span> and its result in the present or in the future.</p>
            </section>
            <Spacer size="medium" />
            <section className="flexColumn">
              <h3 className="shadowText" >What do I use the second conditional for?</h3>
              <EmphasisContainer>
                <p>Use the second conditional to imagine, dream and wish!</p>
              </EmphasisContainer>
              <ul className={ list }>
                <li>To talk about an unreal condition in the present and an imaginary result.
                </li>
                <li>Use the second conditional To talk about an impossible/unlikely condition and result in the future.</li>
                <li>To talk about an imaginary yet possible future situation and often to consider options.</li>
                <li>To give advice.</li>
                <li>To ask for advice.</li>
                <li>Ask a hypothetical question.</li>
                <li>To give a reason why you can't do something.</li>
                <li>To make polite requests.</li>
              </ul>
            </section>
            <Spacer size="small" />
            <section className="flexColumn">
              <h3 className="shadowText">How do I make the second conditional?</h3>
              <p>You make a sentence with the second conditional by using two parts.</p>
              <p>One part makes the condition, it uses <em>if</em> and the <a href="/">past simple</a>. The second part makes the result, it uses the subject + <em>would</em> + <span className={ tooltip } title="The present participle."><a href="/">verb 1</a></span>. Then you add them both together to make a sentence.</p>
              <p>Either like this with the condition first, result second and a <span className={ tooltip } title=",">comma</span> in the middle:</p>
              <ul>
                <li>If condition + comma + result.</li>
                <li>Or like this with the result first, the condition second and without a <span className={ tooltip } title=",">comma</span>.</li>
                <li>Result + if condition.</li>
              </ul>
            </section>
            <Spacer size="small" />
            <section className="flexColumn">
              <h5 className="shadowText">Do I have to use would?</h5>
              <p>Above, you used <em>would</em>. Would is the word most often used for the second conditional but there are two other words you can use. It all depends on what you want to say!</p>
              <ul>
                <li>Use <em>would</em> for wishes and dreams.</li>
                <ul>
                  <li>If we <em>had</em> the money, I would love to buy that house.</li>
                </ul>
                <li>Use <em>could</em> when the result is not 100% sure.</li>
                <ul>
                  <li>If we owned a car, I <em>could</em> drive to work.</li>
                </ul>
                <li>Use <em>might</em> when the result is a lot less sure.</li>
                <ul>
                  <li>If we had the money, I <em>might</em> buy a car.</li>
                </ul>
              </ul>
            </section>
            <Spacer size="medium" />
            <EmphasisContainerMinor>
              <section className="flexColumn">
                <h5 className="shadowText">Something that is a little different!</h5>
                <p>When imagining you are someone else you use the verb <em>to be</em> like this:
                  <ul>
                    <li>If I were you</li>
                    <li>if I was you</li>
                  </ul>
                  <em>'If I were'</em> is correct but <em>'if I was'</em> is also used be some English speaking people.</p>
              </section>
              <Spacer size="small" />
              <section className="flexColumn">
                <h5 className="shadowText">When talking about imaginary abilities, things are different.</h5>
                <p>Replace the <a href="/">past simple</a> with could + <span className={ tooltip } title="The present participle."><a href="/">verb 1</a></span> like this:</p>
                <ul>
                  <li>If I could fly, I'd fly to Africa.</li>
                  <span><em>not</em></span>
                  <li>If I flew, I'd fly to Africa.</li>
                  <li>If I could play the piano, I'd make beautiful music.</li>
                  <span><em>not</em></span>
                  <li>If I played the piano, I'd make beautiful music.</li>
                  <li>I'd be home by now if I could run faster.</li>
                  <span><em>not</em></span>
                  <li>I'd be home by now if I ran faster.</li>
                </ul>
              </section>
              <Spacer size="small" />
              <section className="flexColumn">
                <h6 className="shadowText">Something to remember!</h6>
                <p><span className={ tooltip } title="The present participle."><a href="/">Verb 1</a></span> after would/could is not always necessary if the context is clear.</p>
                <ul>
                  <li>If I could help you, I would.</li>
                </ul>
              </section>
            </EmphasisContainerMinor>
            <Spacer size="small" />
            <section className="flexColumn">
              <h3 className="shadowText">Can I see some examples?</h3>
              <h4 className="shadowText">Here we are talking about an impossible/unlikely future condition and result.</h4>
              <ul>
                <li>If he went to the moon, <span clasName={ tooltip } title="This uses a contraction. He would becomes he'd.">he'd</span> be happy.</li>
                <li>If I won the lottery, I would buy a mansion.</li>
                <li>If they owned the company, <span clasName={ tooltip } title="This uses a contraction. They would becomes they'd.">they'd</span> do a better job.</li>
              </ul>
              <Spacer size="small" />
              <h4 className="shadowText">Here we are talking about an imaginary yet possible future situation, often as a way of considering something.</h4>
              <ul>
                <li>If I joined a gym, I might work out more.</li>
                <li>They could finish on time if the company employed another person.</li>
                <li>If we bought cheaper coffee, <span clasName={ tooltip } title="This uses a contraction. We would becomes we'd.">we'd</span> save more money.</li>
              </ul>
              <Spacer size="small" />
              <h4 className="shadowText"> Here we are talking about an unreal condition in the present and an imaginary result.</h4>
              <ul>
                <li>If I had a million euros, I might buy that car.</li>
                <li>He would do better if he worked a bit harder.</li>
                <li>If she were more careful, she <span clasName={ tooltip } title="This uses a contraction. She would not becomes she wouldn't.">wouldn't</span> break everything.</li>
              </ul>
              <Spacer size="small" />
              <h4 className="shadowText">Here we are giving someone advice.</h4>
              <ul>
                <li>If I were her, I'd say no.</li>
                <li>If I were you, I think I might call them.</li>
                <li>If I were your age, I'd be at a party with my friends.</li>
              </ul>
              <Spacer size="small" />
              <h4 className="shadowText">Here we are asking for advice.</h4>
              <ul>
                <li> If you were me, what would you do?</li>
                <li>If you could go on holiday, would you?</li>
                <li> If you lived there, what would you do?</li>
              </ul>
              <Spacer size="small" />
              <h4 className="shadowText">Here we ask someone <span className={ tooltip } title="A question about that something that is impossible or very unlikely to happen.">a hypothetical question</span>.</h4>
              <ul>
                <li>What would you do if it were always night?</li>
                <li>If you could change the country, what would you change?</li>
                <li>If you met the Queen, what might you say?</li>
              </ul>
              <Spacer size="small" />
              <h4 className="shadowText">Give reasons why you cannot do something.</h4>
              <ul>
                <li>If I had his number, I would call him.</li>
                <li>If I had the time, I could do something about it.</li>
                <li>If I thought it would make a difference, I might help.</li>
              </ul>
              <Spacer size="small" />
              <h4 className="shadowText">Here we make a polite request.</h4>
              <ul>
                <li><span className={ tooltip } title="This uses a contraction. It would becomes it'd.">It'd</span> be great if you introduced us.</li>
                <li><span className={ tooltip } title="This uses a contraction. I would becomes I'd.">I'd</span> be really happy if you visited me.</li>
                <li>She might find it easier if you helped her.</li>
              </ul>
            </section>
          </article>
        </MainWide>
        <aside className="sideBorderDark sideBorderPad">
          <h3 className="shadowText">Other Lessons</h3>
          <Spacer size="small" />
          <Link to={ `/english/using-get/exercise-2` } className="accentText" activeClassName="isActive" >Advanced Lesson On Using Get</Link>
          <Spacer size="large" />
          <h3 className="shadowText">Exercises</h3>
          <Spacer size="small" />
          <Link to={ `/english/using-get/exercise-2` } className="accentText" activeClassName="isActive" >Advanced Lesson On Using Get</Link>
        </aside>
      </IndexRight>
    </Layout>
  );
}

////** PROP TYPES **////
AdvancedLesson.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default AdvancedLesson;