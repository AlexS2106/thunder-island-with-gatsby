import React from "react";
import PropTypes from "prop-types";

import { 
  grid,
  indexItem
} from "./index.module.css";

import Breadcrumbs from "../../../components/navigation/Breadcrumbs";
import Layout from "../../../components/layout/Layout";
import MainWide from "../../../components/layout/MainWide";
import PageTitle from "../../../components/typography/PageTitle";
import Spacer from "../../../components/layout/Spacer";


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
      <PageTitle title={ pageTitle } />
      <Spacer size="small" />
      <Breadcrumbs crumbs={ crumbs } />
      <div className={ grid }>
        <MainWide>
          <article>
            <section className="flexColumn">
              <h3>What is the second conditional?</h3>
              <p>An <span className={ tooltip } title="Not true">unreal</span> <span className={ tooltip } title="A situation or action.">condition</span> and its result in the present or in the future.</p>
            </section>
            <hr />
            <section className="flexColumn">
              <h3>What do I use the second conditional for?</h3>
              <p>Use the second conditional to imagine, dream and wish!</p>
              <dl>
                <dt>To talk about an unreal condition in the present and an imaginary result.
                </dt>
                <dd></dd>
                <dt>Use the second conditional To talk about an impossible/unlikely condition and result in the future.</dt>
                <dd></dd>
                <dt>To talk about an imaginary yet possible future situation and often to consider options.</dt>
                <dd></dd>
                <dt>To give advice.</dt>
                <dd></dd>
                <dt>To ask for advice.</dt>
                <dd></dd>
                <dt>Ask a hypothetical question.</dt>
                <dd></dd>
                <dt>To give a reason why you can’t do something.</dt>
                <dd></dd>
                <dt>To make polite requests.</dt>
              </dl>
            </section>
            <hr />
            <section className="flexColumn">
              <h3>How do I make the second conditional?</h3>
              <p>You make a sentence with the second conditional by using two parts.</p>
              <dl>
                <dt>One part makes the condition, it uses <em>if</em> and the <a href="/">past simple</a>:</dt>
                <dd></dd>
                <dt>The second part makes the result, it uses the subject + <em>would</em> + <span className={ tooltip } title="The present participle."><a href="/">verb 1</a></span>.</dt>
                <dd>!</dd>
              </dl>
              <p>Then you add them both together to make a sentence.</p>
              <p>Either like this with the condition first, result second and a <span className={ tooltip } title=",">comma</span> in the middle:</p>
              <dl>
                <dt>If condition + comma + result.</dt>
                <dd></dd>
              </dl>
              <p>Or like this with the result first, the condition second and without a <span className={ tooltip } title=",">comma</span>.</p>
              <dl>
                <dt>Result + if condition.</dt>
                <dd></dd>
              </dl>
            </section>
            <hr />
            <section className="flexColumn">
              <h6>Do I have to use would?</h6>
              <p>Above, you used <em>would</em>. Would is the word most often used for the second conditional but there are two other words you can use. It all depends on what you want to say!</p>
              <dl>
                <dt>Use <em>would</em> for wishes and dreams.</dt>
                <dd>If we <em>had</em> the money, I would love to buy that house.</dd>
                <dt>Use <em>could</em> when the result is not 100% sure.</dt>
                <dd>If we owned a car, I <em>could</em> drive to work.</dd>
                <dt>Use <em>might</em> when the result is a lot less sure.</dt>
                <dd>If we had the money, I <em>might</em> buy a car.</dd>
              </dl>
            </section>
            <hr />
            <section className="flexColumn">
              <h6>Something that is a little different!</h6>
              <p>When using the verb <em>to be</em>, the sentence looks like this:
                <ul>
                  <li>If I were you</li>
                  <li>if I was you</li>
                </ul>
                <p><em>'If I were'</em> is correct but <em>'if I was'</em> is also used be some English speaking people.</p>
              </p>
            </section>
            <hr />
            <section className="flexColumn">
              <h6>When talking about imaginary abilities, things are different.</h6>
              <p>Replace the <a href="/">past simple</a> with could + <span className={ tooltip } title="The present participle."><a href="/">verb 1</a></span> like this:</p>
              <ul>
                <li>If I could fly, I’d fly to Africa.</li>
                <span><em>not</em></span>
                <li>If I flew, I’d fly to Africa.</li>
                <li>If I could play the piano, I’d make beautiful music.</li>
                <span><em>not</em></span>
                <li>If I played the piano, I’d make beautiful music.</li>
                <li>I’d be home by now if I could run faster.</li>
                <span><em>not</em></span>
                <li>I’d be home by now if I ran faster.</li>
              </ul>
            </section>
            <hr />
            <section className="flexColumn">
              <h6>Something to remember!</h6>
              <p><span className={ tooltip } title="The present participle."><a href="/">Verb 1</a></span>1 after would/could is not always necessary if the context is clear.</p>
              <ul>
                <li>If I could help you, I would.</li>
              </ul>
            </section>
            <hr />
            <section className="flexColumn">
              <h3>Can I see some examples?</h3>
              <dl>
                <dt>Here we are talking about an impossible/unlikely future condition and result.</dt>
                <dd>If he went to the moon, <span clasName={ tooltip } title="This uses a contraction. He would becomes he'd.">he'd</span> be happy.</dd>
                <dd>If I won the lottery, I would buy a mansion.</dd>
                <dd>If they owned the company, <span clasName={ tooltip } title="This uses a contraction. They would becomes they'd.">they'd</span> do a better job.</dd>
                <dt>Here we are talking about an imaginary yet possible future situation, often as a way of considering something.</dt>
                <dd>If I joined a gym, I might work out more.</dd>
                <dd>They could finish on time if the company employed another person.</dd>
                <dd>If we bought cheaper coffee, <span clasName={ tooltip } title="This uses a contraction. We would becomes we'd.">we'd</span> save more money.</dd>
                <dt> Here we are talking about an unreal condition in the present and an imaginary result.</dt>
                <dd>If I had a million euros, I might buy that car.</dd>
                <dd>He would do better if he worked a bit harder.</dd>
                <dd>If she were more careful, she <span clasName={ tooltip } title="This uses a contraction. She would not becomes she wouldn't.">wouldn't</span> break everything.</dd>
                <dt>Here we are giving someone advice.</dt>
                <dd>If I were her, I’d say no.</dd>
                <dd>If I were you, I think I might call them.</dd>
                <dd>If I were your age, I’d be at a party with my friends.</dd>
                <dt>Here we are asking for advice.</dt>
                <dd> If you were me, what would you do?</dd>
                <dd>If you could go on holiday, would you?</dd>
                <dd> If you lived there, what would you do?</dd>
                <dt>Here we ask someone <span className={ tooltip } title="A question about that something that is impossible or very unlikely to happen.">a hypothetical question</span>.</dt>
                <dd>What would you do if it were always night?</dd>
                <dd>If you could change the country, what would you change?</dd>
                <dd>If you met the Queen, what might you say?</dd>
                <dt>Give reasons why you cannot do something.</dt>
                <dd>If I had his number, I would call him.</dd>
                <dd>If I had the time, I could do something about it.</dd>
                <dd>If I thought it would make a difference, I might help.</dd>
                <dt>Here we make a polite request.</dt>
                <dd><span clasName={ tooltip } title="This uses a contraction. It would becomes it'd.">It'd</span> be great if you introduced us.</dd>
                <dd><span clasName={ tooltip } title="This uses a contraction. I would becomes I'd.">I'd</span> be really happy if you visited me.</dd>
                <dd>She might find it easier if you helped her.</dd>
              </dl>
            </section>
          </article>
        </MainWide>
        <aside>
          <h3>Exercises</h3>
        </aside>
      </div>
    </Layout>
  );
}

////** PROP TYPES **////
AdvancedLesson.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default AdvancedLesson;