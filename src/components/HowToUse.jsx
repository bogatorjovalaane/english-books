import React from "react";


const HowToUse = () => {
  return (
    <div className="howto-container">
      <h1>How To Use</h1>

      <p className="howto-intro">
        In this section, we would like to provide an overview of how to use our
        website for optimal results and briefly discuss what each tab offers to
        the visitor.
      </p>

      <div className="howto-block">
        <ul>
          <li>
            The <strong>“Home”</strong> tab displays the website's name and
            provides a brief description.
          </li>
          <li>
            The <strong>“About”</strong> tab explains our goals and purposes in
            the creation of this platform.
          </li>
          <li>
            <strong>“Browse Books”</strong> includes a list of culture-related
            books.
          </li>
          <li>
            The <strong>“Contact”</strong> tab lists the contacts of the
            individuals behind this website and who can assist with questions.
          </li>
        </ul>
      </div>

      <p className="howto-text">
        The following subpoints provide a detailed explanation of the website's
        structure and usage. Instructions are suitable for both teachers and
        students.
      </p>

      <div className="howto-section">
        <p>
          When pressing on the <strong>“Browse Books”</strong> tab, a list of
          books will open. By scrolling through the list, you will see the books
          currently available on the platform. This list will be updated over
          time.
        </p>

        <p>
          If any book sparks your interest, you can find an official cover, the
          author, and the themes. Themes help you choose the book that suits
          your goals and desired topic. The teacher is free to adjust the book to suit the language level of the learners. To view the book closely, please click
          on the title of the book.
        </p>

        <img
          src={`${import.meta.env.BASE_URL}/images/usage1.jpg`}
          alt="Usage Example 1"
          className="usage-image"
        />

        <p>
          After clicking on the book, you can see it in detail. All the books
          presented on the website include the publisher, year of publication,
          age range, themes, and summary.
        </p>

        <p>
          Under the summary, there will be two options:{" "}
          <strong>“Read Aloud”</strong> and <strong>“Find in Library”</strong>.
        </p>

        <p>
          If you click on <strong>“Find in Library”</strong>, you will be
          redirected to the website <strong>E-kataloog ESTER</strong>. This link
          indicates that the chosen book is available in Estonian libraries, and
          there is an option to order it to your local library.
        </p>

        <img
          src={`${import.meta.env.BASE_URL}/images/usage2.jpg`}
          alt="Usage Example 2"
          className="usage-image"
        />

        <p>
          If ordering is not available, then the <strong>“Read Aloud”</strong>{" "}
          button will redirect you to a YouTube link where someone reads the
          book aloud.
        </p>

        <img
          src={`${import.meta.env.BASE_URL}/images/usage3.jpg`}
          alt="Usage Example 3"
          className="usage-image"
        />

        <p>
          Additionally, some books include examples of{" "}
          <strong>“Classroom Activities”</strong> designed to engage students
          with the material. These are just examples and can be modified for
          different needs and goals. Activities include{" "}
          <strong>Before Reading</strong> and <strong>After Reading</strong>{" "}
          tasks.
        </p>

        <img
          src={`${import.meta.env.BASE_URL}/images/usage4.jpg`}
          alt="Usage Example 4"
          className="usage-image"
        />

        <p>
          To return to the book list, please click on the{" "}
          <strong>“Back to all books”</strong> button.
        </p>
      </div>
    </div>
  );
};

export default HowToUse;
