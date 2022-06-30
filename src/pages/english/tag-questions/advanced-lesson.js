import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { 
} from "./index.module.css";

import Breadcrumbs from "../../../components/navigation/Breadcrumbs";
import IndexRight from "../../../components/layout/indexesWithContent/IndexRight";
import Layout from "../../../components/layout/containers/Layout";
import MainWide from "../../../components/layout/containers/MainWide";
import PageTitle from "../../../components/typography/PageTitle";
import Spacer from "../../../components/layout/spacing/Spacer";


  ////** COMPONENT **////
const AdvancedLesson = ( { pageContext} ) => {
  
  ////** STATE **////

  ////** CONTEXT **////
  //Breadcrumb context
    const {
    breadcrumb: { crumbs }
  } = pageContext;

  ////** VARIABLES **////
  //PageTitle
  const pageTitle = "";
  //Tooltip
  const tooltip = "";

  ////** MARK UP **////
  return (
    <Layout>
      <Spacer size="small" />
      <PageTitle title={ pageTitle } />
      <Spacer size="small" />
      <Breadcrumbs crumbs={ crumbs } />
      <IndexRight>
        <MainWide>
          <article>
            <section display="flexColumn">
              <h3>What is a tag question?</h3>
              <p>Tag questions are another way to ask a question.</p>
              <p>Usually, we ask questions in English like this: <br />
                Question word + modal verb + subject + main verb + ...</p>
              <dl>
                <dd>Where are you going today?</dd>
                <span>or</span>
                <dd>When is it happening?</dd>
                <span>or</span>
                <dd>Why did he do that?</dd>
                <span>or</span>
                <dd>Can she make it?</dd>
              </dl>
              <p>Tag questions are a little different.</p>
              <p>Tag questions are a mini question added or 'tagged' on to the end of a <span className={ tooltip } title="A statement is sentence you believe is true.">statement</span>.</p>
              <dl>
                <dd>You are going today, aren't you?</dd>
                <span>or</span>
                <dd>It is happening, isn't it?</dd>
                <span>or</span>
                <dd>He did that, didn't he?</dd>
                <span>or</span>
                <dd>She made it, didn't she?</dd>
              </dl>
            </section>
            <section className="flexColumn">
              <h6>Something to remember!</h6>
              <p>While tag questions are mostly used when speaking and not writing, if you are writing a sentence with a tag question place a <span className={ tooltip } title=",">comma</span> between the statement and the tag question.</p>
            </section>
            <hr role="none" />
            <section className="flexColumn">
              <h3>What do I use tag questions for?</h3>
              <dl>
                <dt>Use tag questions to check you have understood.</dt>
                <dd>The medicine is in the top drawer. Isn’t it?</dd>
                <dt>Use tag questions to soften a statement.</dt>
                <dd>You couldn’t do it, could you?</dd>
                <dt>Use tag questions to ask a question more indirectly.</dt>
                <dd>He's going, isn't he?</dd>
                <dt>Use tag questions to check a piece of information is true.</dt>
                <dd>This is where you live, isn't it?</dd>
                <dt>Use tag questions as a <span className={ tooltip } title="A question you ask of yourself and requires no answer.">rhetorical</span> question.</dt>
                <dd>I didn't do that very well, did I?</dd>
              </dl>
            </section>
            <section className="flexColumn">
              <h6>Something to remember!</h6>
              <dl>
                <dd>Tag questions are mostly used in informal conversations and used a lot.</dd>
                <dd>Tag questions are rarely written down and when they are the message is often meant harshly.</dd>
              </dl>
            </section>
            <hr role="none" />
            <section className="flexColumn">
              <h3>How do I make a tag question?</h3>
              <p>To make tag questions you use a positive and a negative.</p>
              <p>If the statement is positive, the tag question must be negative.</p>
              <p>But, if the statement is negative then the tag question must be positive.</p>
              <p>Like this:
                <dl>
                  <dd>This is a positive statement with a negative tag question, isn't it?</dd>
                  <dd>This isn't the same, is it?</dd>
                </dl>
              </p>
              <p>There are three different ways to make tag questions, let's look at them.</p>
              <p>Most tag questions look like this:
                <span className={ tooltip } title="The statement.">Subject + <span className={ tooltip } title="A verb that helps other verbs."><a href="/">auxiliary verb</a></span> + verb</span>, <span className={ tooltip } title="The tag question.">the same <span className="tooltip" title="A verb that helps other verbs."><a href="/">auxiliary verb</a></span> + <a href="/">pronoun</a>?</span>
              </p>
              <dl>
                <dd>You haven’t been here, have you?</dd>
                <dd>He is cooking tonight, isn’t he?</dd>
                <dd>She could have gone with them, couldn’t she?</dd>
                <dd>I should have told him, shouldn’t I?</dd>
              </dl>
              <p>Sometimes tag questions look like this:
                <span className={ tooltip } title="The statement.">Subject + verb</span>, <span className={ tooltip } title="The tag question.">do/does/did + pronoun ?</span>
              </p>
              <dl>
                <dd>They decided, didn’t they?</dd>
                <dd>We left everything behind, didn’t we?</dd>
                <dd>He runs very fast, doesn’t he?</dd>
                <dd>You don’t, do you?</dd>
              </dl>
              <p>There is one exception to remember:
                <span className={ tooltip } title="The statement.">I + am</span>, <span className={ tooltip } title="The tag question.">aren't I<a href="/">pronoun</a>?</span>
              </p>
              <dl>
                <dd>I am going, aren’t I?</dd>
                <dd>I am working right now, aren’t I?</dd>
                <dd>I'm here, aren’t I?</dd>
              </dl>
            </section>
            <hr role="none" />
            <section className="flexColumn">
              <h6>Something to remember!</h6>
              <dl>
              <dt>Usually, we use these verbs for tag questions:</dt>
                  <dd>to be</dd>
                  <dd>to have</dd>
                  <dd>to do</dd>
                  <dd>could</dd>
                  <dd>should</dd>
              </dl>
            </section>
            <hr role="none" />
            <section className="flexColumn">
              <h3>Can I see some examples?</h3>
              <dl>
                <dd>There's nobody here, is there?</dd>
                <dd>You kept the receipt, didn't you?</dd>
                <dd>I asked you, didn't I?</dd>
                <dd>This boat is safe, isn't it?</dd>
                <dd>I'm learning quickly, aren't I?</dd>
              </dl>
            </section>
          </article>
        </MainWide>
        <aside className="sideBorderDark sideBorderPad">
          <h3>Exercises Tag Questions</h3>
          <Link to={ `/english/tag-questions/exercise` } className="accentText" activeClassName="isActive" >Tag Questions Exercise 1</Link>
        </aside>
      </IndexRight>
      <Link href="/">Return to Home</Link>
    </Layout>
  );
}

////** PROP TYPES **////
AdvancedLesson.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default AdvancedLesson;