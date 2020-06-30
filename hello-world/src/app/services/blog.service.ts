import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { BlogComment } from '../model/Comment';
import { CommentReply } from '../model/Reply';
import { getDateTime } from '../common/functions';
import { map, catchError } from 'rxjs/operators';

export interface Blog {
  id:number,
  heading: string,
  content: string,
  comments: BlogComment[]
}
@Injectable({
  providedIn: 'root'
})


export class BlogService {

  public blogs: Blog[] =  [
    {
        "id":1,
        "heading": "Blog A",
        "content": "Animals (also called Metazoa) are multicellular eukaryotic organisms that form the biological kingdom Animalia. With few exceptions, animals consume organic material, breathe oxygen, are able to move, can reproduce sexually, and grow from a hollow sphere of cells, the blastula, during embryonic development. Over 1.5 million living animal species have been described—of which around 1 million are insects—but it has been estimated there are over 7 million animal species in total. Animals range in length from 8.5 micrometres (0.00033 in) to 33.6 metres (110 ft). They have complex interactions with each other and their environments, forming intricate food webs. The kingdom Animalia includes humans but in colloquial use the term animal often refers only to non-human animals. The scientific study of animals is known as zoology.Most living animal species are in Bilateria, a clade whose members have a bilaterally symmetric body plan. The Bilateria include the protostomes—in which many groups of invertebrates are found, such as nematodes, arthropods, and molluscs—and the deuterostomes, containing both the echinoderms as well as the chordates, the latter containing the vertebrates. Life forms interpreted as early animals were present in the Ediacaran biota of the late Precambrian. Many modern animal phyla became clearly established in the fossil record as marine species during the Cambrian explosion, which began around 542 million years ago. 6,331 groups of genes common to all living animals have been identified; these may have arisen from a single common ancestor that lived 650 million years ago.Historically, Aristotle divided animals into those with blood and those without. Carl Linnaeus created the first hierarchical biological classification for animals in 1758 with his Systema Naturae, which Jean-Baptiste Lamarck expanded into 14 phyla by 1809. In 1874, Ernst Haeckel divided the animal kingdom into the multicellular Metazoa (synonymous for Animalia) and the Protozoa, single-celled organisms no longer considered animals. In modern times, the biological classification of animals relies on advanced techniques, such as molecular phylogenetics, which are effective at demonstrating the evolutionary relationships between animal taxa.Humans make use of many other animal species, such as for food (including meat, milk, and eggs), for materials (such as leather and wool), and also as pets, and for transports, as working animals. Dogs have been used in hunting, while many terrestrial and aquatic animals were hunted for sports. Non-human animals have appeared in art from the earliest times and are featured in mythology and religion. ",
        "comments":[]
    },
    {
        "id":2,
        "heading": "Blog B",
        "content": "Animals (also called Metazoa) are multicellular eukaryotic organisms that form the biological kingdom Animalia. With few exceptions, animals consume organic material, breathe oxygen, are able to move, can reproduce sexually, and grow from a hollow sphere of cells, the blastula, during embryonic development. Over 1.5 million living animal species have been described—of which around 1 million are insects—but it has been estimated there are over 7 million animal species in total. Animals range in length from 8.5 micrometres (0.00033 in) to 33.6 metres (110 ft). They have complex interactions with each other and their environments, forming intricate food webs. The kingdom Animalia includes humans but in colloquial use the term animal often refers only to non-human animals. The scientific study of animals is known as zoology.Most living animal species are in Bilateria, a clade whose members have a bilaterally symmetric body plan. The Bilateria include the protostomes—in which many groups of invertebrates are found, such as nematodes, arthropods, and molluscs—and the deuterostomes, containing both the echinoderms as well as the chordates, the latter containing the vertebrates. Life forms interpreted as early animals were present in the Ediacaran biota of the late Precambrian. Many modern animal phyla became clearly established in the fossil record as marine species during the Cambrian explosion, which began around 542 million years ago. 6,331 groups of genes common to all living animals have been identified; these may have arisen from a single common ancestor that lived 650 million years ago.Historically, Aristotle divided animals into those with blood and those without. Carl Linnaeus created the first hierarchical biological classification for animals in 1758 with his Systema Naturae, which Jean-Baptiste Lamarck expanded into 14 phyla by 1809. In 1874, Ernst Haeckel divided the animal kingdom into the multicellular Metazoa (synonymous for Animalia) and the Protozoa, single-celled organisms no longer considered animals. In modern times, the biological classification of animals relies on advanced techniques, such as molecular phylogenetics, which are effective at demonstrating the evolutionary relationships between animal taxa.Humans make use of many other animal species, such as for food (including meat, milk, and eggs), for materials (such as leather and wool), and also as pets, and for transports, as working animals. Dogs have been used in hunting, while many terrestrial and aquatic animals were hunted for sports. Non-human animals have appeared in art from the earliest times and are featured in mythology and religion. ",
        "comments":[]
    },
    {
        "id":3,
        "heading": "Blog C",
        "content": "Animals (also called Metazoa) are multicellular eukaryotic organisms that form the biological kingdom Animalia. With few exceptions, animals consume organic material, breathe oxygen, are able to move, can reproduce sexually, and grow from a hollow sphere of cells, the blastula, during embryonic development. Over 1.5 million living animal species have been described—of which around 1 million are insects—but it has been estimated there are over 7 million animal species in total. Animals range in length from 8.5 micrometres (0.00033 in) to 33.6 metres (110 ft). They have complex interactions with each other and their environments, forming intricate food webs. The kingdom Animalia includes humans but in colloquial use the term animal often refers only to non-human animals. The scientific study of animals is known as zoology.Most living animal species are in Bilateria, a clade whose members have a bilaterally symmetric body plan. The Bilateria include the protostomes—in which many groups of invertebrates are found, such as nematodes, arthropods, and molluscs—and the deuterostomes, containing both the echinoderms as well as the chordates, the latter containing the vertebrates. Life forms interpreted as early animals were present in the Ediacaran biota of the late Precambrian. Many modern animal phyla became clearly established in the fossil record as marine species during the Cambrian explosion, which began around 542 million years ago. 6,331 groups of genes common to all living animals have been identified; these may have arisen from a single common ancestor that lived 650 million years ago.Historically, Aristotle divided animals into those with blood and those without. Carl Linnaeus created the first hierarchical biological classification for animals in 1758 with his Systema Naturae, which Jean-Baptiste Lamarck expanded into 14 phyla by 1809. In 1874, Ernst Haeckel divided the animal kingdom into the multicellular Metazoa (synonymous for Animalia) and the Protozoa, single-celled organisms no longer considered animals. In modern times, the biological classification of animals relies on advanced techniques, such as molecular phylogenetics, which are effective at demonstrating the evolutionary relationships between animal taxa.Humans make use of many other animal species, such as for food (including meat, milk, and eggs), for materials (such as leather and wool), and also as pets, and for transports, as working animals. Dogs have been used in hunting, while many terrestrial and aquatic animals were hunted for sports. Non-human animals have appeared in art from the earliest times and are featured in mythology and religion. ",
        "comments":[]
    }   
]
  public comments : BlogComment[];

  public baseUrl = 'http://localhost/api';
  cars
  constructor(
    private http: HttpClient
  ) { }

  // getBlogById(id): Observable<any> {
  //   return this.http.get(this.baseUrl);
  // }

    getAll(): Observable<any[]> {
      return this.http.get(`${this.baseUrl}/list`).pipe(
        map((res) => {
          this.cars = res['data'];
          return this.cars;
      }))
    }


    getById(): Observable<any[]> {
      return this.http.get(`${this.baseUrl}/get-by-id?ab=3`).pipe(
        map((res) => {
          this.cars = res['data'];
          return this.cars;
      }))
    }

  getBlogById(id)  {
    return of(this.blogs.find(blog => blog.id == id))
  }

  addComment(id,comment) {
    let currentComment: BlogComment = {
      text : comment,
      blog_id: id,
      status: 'approved',
      replies: [],
      user_id: 0,
      username: 'karthik',
      id: Math.floor(Math.random() * (100 - 10 + 1) ) + 10,
      time: getDateTime()
    };
    this.blogs.find(blog => blog.id == id).comments.push(currentComment);
  }
  addReply(reply,comment:BlogComment) {
    let currentReply : CommentReply = {
      text: reply,
      id: Math.floor(Math.random() * (3482 - 256 + 1) ) + 256,
      comment_id: comment.id,
      username: comment.username,
      user_id: comment.user_id
    }

    this.blogs.find(blog => blog.id == comment.blog_id).comments
              .find(comment => comment.id == currentReply.comment_id).replies
              .push(currentReply);
  }

  deleteComment(blogComment:BlogComment) {
    let latestComments = this.blogs.find(blog => blog.id == blogComment.blog_id).comments
              .filter(comment => comment.id != blogComment.id);
    this.blogs.find(blog => blog.id == blogComment.blog_id).comments = latestComments;
  }
  editComment(originalComment:BlogComment,newComment:string) {
    this.blogs.find(blog => blog.id == originalComment.blog_id).comments
    .find(comment => comment.id == originalComment.id).text = newComment;

  }
}
