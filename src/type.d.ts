interface IArticle { //shape of article
    id: number
    title: string
    body: string
  }
  
  type ArticleState = { //shape of state object
    articles: IArticle[]
  }
  
  type ArticleAction = { 
    type: string
    article: IArticle
  }
  
  type DispatchType = (args: ArticleAction) => ArticleAction