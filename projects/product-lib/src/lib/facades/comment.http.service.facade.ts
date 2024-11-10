import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetCommentsByProductId } from '../services/http-service/GetCommentsByProductId.service';
import { CommentHttpResponse } from '../services/http-responses/comment-http-response';

@Injectable({
  providedIn: 'root',
})
export class CommentHttpServiceFacade {
  constructor(private _getCommentsByProductId: GetCommentsByProductId) {}

  public loadComments(id: string): Observable<CommentHttpResponse> {
    return this._getCommentsByProductId.doGet(id);
  }
}
