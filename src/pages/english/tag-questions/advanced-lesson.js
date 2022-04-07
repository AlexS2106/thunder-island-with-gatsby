import React from "react";
import { Link } from "gatsby";

import Layout from "../../../components/layout/Layout";

const TagQuestions = ( ) => {

  const tooltip = "";
  
  return (
    <Layout>
      <h1>Tag Questions Lessons</h1>
      <main>
        <article>
          <section>
            <h3>What is a tag question?</h3>
            <p>Tag questions are another way to ask a question.</p>
            <p>Usually, we ask questions in English like this: <br />
              Question word + modal verb + subject + main verb + ...</p>
            <ul>
              <li>Where are you going today?</li>
              <span>or</span>
              <li>When is it happening?</li>
              <span>or</span>
              <li>Why did he do that?</li>
              <span>or</span>
              <li>Can she make it?</li>
            </ul>
            <p>Tag questions are a little different.</p>
            <p>Tag questions are a mini question added or 'tagged' on to the end of a <span className={ tooltip } title="A statement is sentence you believe is true.">statement</span>.</p>
            <ul>
              <li>You are going today, aren't you?</li>
              <span>or</span>
              <li>It is happening, isn't it?</li>
              <span>or</span>
              <li>He did that, didn't he?</li>
              <span>or</span>
              <li>She made it, didn't she?</li>
            </ul>
          </section>
          <section>
            <h6>Something to remember!</h6>
            <p>While tag questions are mostly used when speaking and not writing, if you are writing a sentence with a tag question place a <span className={ tooltip } title=",">comma</span> between the statement and the tag question.</p>
          </section>
          <hr />
          <section>
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
          <section>
            <h6>Something to remember!</h6>
            <ul>
              <li>Tag questions are mostly used in informal conversations and used a lot.</li>
              <li>Tag questions are rarely written down and when they are the message is often meant harshly.</li>
            </ul>
          </section>
          <hr />
          <section>
            <h3>How do I make a tag question?</h3>
            <p>To make tag questions you use a positive and a negative.</p>
            <p>If the statement is positive, the tag question must be negative.</p>
            <p>But, if the statement is negative then the tag question must be positive.</p>
            <p>Like this:
              <ul>
                <li>This is a positive statement with a negative tag question, isn't it?</li>
                <li>This isn't the same, is it?</li>
              </ul>
            </p>
            <p>There are three different ways to make tag questions, let's look at them.</p>
            <p>Most tag questions look like this:
              <span className={ tooltip } title="The statement.">Subject + <span className={ tooltip } title="A verb that helps other verbs."><a href="/">auxiliary verb</a></span> + verb</span>, <span className={ tooltip } title="The tag question.">the same <span className="tooltip" title="A verb that helps other verbs."><a href="/">auxiliary verb</a></span> + <a href="/">pronoun</a>?</span>
            </p>
            <ul>
              <li>You haven’t been here, have you?</li>
              <li>He is cooking tonight, isn’t he?</li>
              <li>She could have gone with them, couldn’t she?</li>
              <li>I should have told him, shouldn’t I?</li>
            </ul>
            <p>Sometimes tag questions look like this:
              <span className={ tooltip } title="The statement.">Subject + verb</span>, <span className={ tooltip } title="The tag question.">do/does/did + pronoun ?</span>
            </p>
            <ul>
              <li>They decided, didn’t they?</li>
              <li>We left everything behind, didn’t we?</li>
              <li>He runs very fast, doesn’t he?</li>
              <li>You don’t, do you?</li>
            </ul>
            <p>There is one exception to remember:
              <span className={ tooltip } title="The statement.">I + am</span>, <span className={ tooltip } title="The tag question.">aren't I<a href="/">pronoun</a>?</span>
            </p>
            <ul>
              <li>I am going, aren’t I?</li>
              <li>I am working right now, aren’t I?</li>
              <li>I'm here, aren’t I?</li>
            </ul>
          </section>
          <hr />
          <section>
            <h6>Something to remember!</h6>
            <p>Usually, we use these verbs for tag questions:
              <ul>
                <li>to be</li>
                <li>to have</li>
                <li>to do</li>
                <li>could</li>
                <li>should</li>
              </ul>
            </p>
          </section>
          <hr />
          <section>
            <h3>Can I see some examples?</h3>
            <ul>
              <li>There's nobody here, is there?</li>
              <li>You kept the receipt, didn't you?</li>
              <li>I asked you, didn't I?</li>
              <li>This boat is safe, isn't it?</li>
              <li>I'm learning quickly, aren't I?</li>
            </ul>
          </section>
        </article>
        <Link href="/">Return to Home</Link>
      </main>
    </Layout>
    
  );
}

export default TagQuestions;