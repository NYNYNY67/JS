'use strct';

{

  class Post {
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount} likes`)
    }

    like() {
      this.likeCount++;
      this.show();
    }

    // 静的メソッド
    static showInfo() {
      console.log('Post class version 1.0');
    }
  }


  class SponsoredPost extends Post {
    constructor(text, sponser) {
      super(text);
      this.sponser = sponser;
    }

    show() {
      super.show();
      console.log(`... sponsered by ${this.sponser}`);
    }
  }



  const posts = [
    new Post("Javascriptの勉強中"),
    new Post("プログラミング楽しい"),
    new SponsoredPost('３分動画でマスターしよう', 'dotinstall'),
  ]

  Post.showInfo();

  posts[2].like();

  // posts[0].show();
  // posts[1].show();

}

