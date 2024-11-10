import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseHttpService } from './base-http.service';
import { CommentHttpResponse } from '../http-responses/comment-http-response';

@Injectable({
  providedIn: 'root',
})
export class GetCommentsByProductId extends BaseHttpService {
  
  constructor(http: HttpClient) {
    super(http, 'https://dummyjson.com/comments?limit=10');
  }

  doGet(id: string): Observable<CommentHttpResponse> {
    return this.http.get<CommentHttpResponse>(`${this.uri}`);
  }
}
