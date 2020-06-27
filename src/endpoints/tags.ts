import type { IntercomlyClient } from 'client';
import { IntercomList, Tag } from 'types';

type AttachTagArgs = {
  contact: (contactId: string, tagId: string) => Promise<Tag>;
  conversation: (
    conversationId: string,
    tagId: string,
    adminId: string,
  ) => Promise<Tag>;
  company: (
    tagName: string,
    company: { id: string } | { company_id: string },
    ...companies: Array<{ id: string } | { company_id: string }>
  ) => Promise<Tag>;
};

type DetachTagArgs = {
  contact: AttachTagArgs['contact'];
  company: AttachTagArgs['company'];
  conversation: (conversationId: string, tagId: string) => Promise<Tag>;
};

export abstract class IntercomTags {
  /**
   * Gets all the tags for a workspace
   *
   * @docs [Get Tags](https://developers.intercom.com/intercom-api-reference/reference#list-tags-for-an-app)
   */
  async getTags(this: IntercomlyClient): Promise<Tag[]> {
    const result = await this.request.get<IntercomList<Tag>>('tags');
    return result.data;
  }

  /**
   * Creates or updates a tag in the workspace.  A tag can be renamed by supplying the tag id
   * as the second paramter with a new name for the tag.
   *
   * @docs [Create or update tag](https://developers.intercom.com/intercom-api-reference/reference#create-and-update-tags)
   */
  async upsertTag(
    this: IntercomlyClient,
    tagName: string,
    /**
     * When a tag's id is provided, the tag will be renamed if the names do not match.
     */
    tagId?: string,
  ): Promise<Tag> {
    const result = await this.request.post<Tag>('tags', {
      name: tagName,
      id: tagId,
    });
    return result;
  }

  /**
   * Deletes a tag by the given tag id.
   *
   * @docs [Delete Tag](https://developers.intercom.com/intercom-api-reference/reference#delete-a-tag)
   */
  async deleteTag(this: IntercomlyClient, id: string): Promise<void> {
    await this.request.delete<Tag>(`tags/${id}`);
  }

  /**
   * Attach a tag to a `contact`, `conversation`, or a `company`.
   *
   * @note
   *  `company` expects the **tag name**, _not_ the **tag id** for the second parameter and allows multiple
   *  companies to be provided at once.
   *
   * @docs [Tag Contact](https://developers.intercom.com/intercom-api-reference/reference#tag-contact)
   * @docs [Tag Conversation](https://developers.intercom.com/intercom-api-reference/reference#attach-a-tag-to-a-conversation)
   * @docs [Tag Companies](https://developers.intercom.com/intercom-api-reference/reference#tag-companies)
   */
  async attachTag<T extends keyof AttachTagArgs>(
    this: IntercomlyClient,
    to: T,
    ...args: Parameters<AttachTagArgs[T]>
  ): Promise<ReturnType<AttachTagArgs[T]>> {
    switch (to) {
      case 'contact': {
        const [contactId, tagId] = args as Parameters<AttachTagArgs['contact']>;
        return this.request.post<Tag>(`contacts/${contactId}/tags`, {
          id: tagId,
        });
      }
      case 'conversation': {
        const [conversationId, tagId, adminId] = args as Parameters<
          AttachTagArgs['conversation']
        >;
        return this.request.post<Tag>(`conversations/${conversationId}/tags`, {
          id: tagId,
          admin_id: adminId,
        });
      }
      case 'company': {
        const [tagName, ...companies] = args as Parameters<
          AttachTagArgs['company']
        >;
        return this.request.post<Tag>(`tags`, {
          name: tagName,
          companies,
        });
      }
      default: {
        throw new Error('Failed');
      }
    }
  }

  /**
   * Attach a tag to a `contact`, `conversation`, or a `company`.
   *
   * @note
   *  `company` expects the **tag name**, _not_ the **tag id** for the second parameter and allows multiple
   *  companies to be provided at once.
   *
   * @docs [Untag Contacts](https://developers.intercom.com/intercom-api-reference/reference#untag-contact)
   * @docs [Untag Companies](https://developers.intercom.com/intercom-api-reference/reference#untag-companies)
   * @docs [Untag Conversation](https://developers.intercom.com/intercom-api-reference/reference#detach-a-tag-from-a-conversation)
   */
  async detachTag<T extends keyof DetachTagArgs>(
    this: IntercomlyClient,
    from: T,
    ...args: Parameters<DetachTagArgs[T]>
  ): Promise<ReturnType<DetachTagArgs[T]>> {
    switch (from) {
      case 'contact': {
        const [contactId, tagId] = args as Parameters<DetachTagArgs['contact']>;
        return this.request.delete<Tag>(`contacts/${contactId}/tags/${tagId}`);
      }
      case 'conversation': {
        const [conversationId, tagId] = args as Parameters<
          DetachTagArgs['conversation']
        >;
        return this.request.delete<Tag>(
          `conversations/${conversationId}/tags/${tagId}`,
        );
      }
      case 'company': {
        const [tagName, ...companies] = args as Parameters<
          DetachTagArgs['company']
        >;
        return this.request.post<Tag>(`tags`, {
          name: tagName,
          companies: companies.map((company) => ({
            ...company,
            untag: true,
          })),
        });
      }
      default: {
        throw new Error('Failed');
      }
    }
  }
}
