import React, { useEffect, useState } from 'react'
import { createClient } from "contentful"
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown'

const SingleRecipe = () => {
  const [singleRecipePost, setSingleRecipePost] = useState([])

  const { id } = useParams();
  console.log(id);

  const client = createClient({ space:"ar4x0y5njc36", accessToken: "pMyFLIVkCKo78nhuVJmD9M0V4cyvj2ZOuL4_ehvR628"})

  useEffect(() => {
    const getEntryById = async () => {
      try {
        await client.getEntry(id).then((entries) => {
          console.log(entries);
          setSingleRecipePost(entries)
        })
      } catch (error) {
        console.log(`Error fetching authors ${error}`);
      }
    };
    getEntryById()
  }, [id])


  return (
    <div id="layout" className="pure-g">
      <div className="content pure-u-1 pure-u-md-3-4">
        <div>
          <div className="posts">
            < section className="post">
              <header className="post-header">
                <img src={singleRecipePost?.fields?.images?.fields?.file?.url} title="" alt={singleRecipePost?.fields?.title} width="450" height="200" />
                <h2 className="post-title pt-3">{singleRecipePost?.fields?.recipesName}</h2>
              </header>
              <div className="post-description">
                <ReactMarkdown children={singleRecipePost?.fields?.recipes}/>
              </div>
              <h4>Ingredient</h4>
              {singleRecipePost?.fields?.ingredient.map((post) => (
                <ul>
                  <li>
                    {post}
                  </li>
                </ul>
              ))}
            </section>
            <Link to="/recipeList" className="content-subhead">Pista Recipe</Link>
          </div>
        </div>
      </div>
    </div >
  )
}

export default SingleRecipe