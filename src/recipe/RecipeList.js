import React, { useEffect, useState } from 'react';
import { createClient } from "contentful";
import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const [recipePosts, setRecipePosts] = useState([])
  const client = createClient({ space:"ar4x0y5njc36", accessToken: "pMyFLIVkCKo78nhuVJmD9M0V4cyvj2ZOuL4_ehvR628"})


  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((entries) => {
          console.log(entries)  
          setRecipePosts(entries)
        })
      } catch (error) {
        console.log(`Error fetching authors ${error}`);
      }
    };
    getAllEntries()
  }, [])



  return (
        <div className='app'>
          <div className="posts">
             {recipePosts?.items?.map((post) => (
              <div className="post" key={post.sys.id}>
                    <div className="card" style={{ width: '18rem' }}>
                          <Card.Img variant="top" src={post.fields.images.fields.file.url} title="" alt={post.fields.title} width='286' height='250' />
                          <Card.Body>
                                <Card.Title>{post.fields.recipesName}</Card.Title>
                                 <Card.Text>
                                   {}
                                 </Card.Text>
                                 <Link variant="primary" to={`/RecipeDetails/${post.sys.id}`}>Recipe</Link>
                           </Card.Body>
                    </div>
                {/* <header className="post-header">
                  <img src={post.fields.images.fields.file.url} title="" alt={post.fields.title} width="250" height="250" />
                  <h2 className="post-title pt-3">{post.fields.recipesName}</h2>
                </header>
                <div className="post-description">
                  <p>{post.fields.recipesName}
                  </p>
                  <button
                    to={`/recipeDetails/${post.sys.id}`}
                    className="button button1">
                    Read More
                  </button>
                </div> */}
              </div>
            ))}
          </div>
          
        </div>
  )
}

export default RecipeList;