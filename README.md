This is a website I created as a school project in 2017.  I have put it on my GitHub as an example of my work.
The site can be accessed at https://gurthwath.github.io/lojban-learning-resource/

The website could be made about ten times better from a development standpoint if it were using dynamic HTML.  However, the constraints of the project would not allow this.  As the project is, to add a new set of vocabulary, one has to add a set of words, manually add a page for each game, direct each page to the correct set of vocabulary words, and add the new pages to the navigation.  This could be automated with a python script, if one so wished.  Also, to add a new game, one would have to first create the logic for the game, then create a new page for each set of words, and direct each page to the correct set of vocabulary.
Using dynamic HTML, each separate instance of a game would use only one DHTML document, and assign the vocabulary lists when the user navigated to the URL.  Adding a vocabulary list would be as easy as adding a .JSON file into the vocabulary folder with no extra fuss.
