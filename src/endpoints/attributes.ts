import type { IntercomlyClient } from 'client';
import { IntercomList, DataAttribute } from 'types';

export abstract class IntercomDataAttributes {
  /**
   * Gets the list of data attributes belonging to a workspace contacts or companies.
   * @see https://developers.intercom.com/intercom-api-reference/reference#list-data-attributes
   *
   * @param this
   * @param [model] The model to update
   * @param [includeArchived]
   * @returns data attributes
   */
  async getDataAttributes(
    this: IntercomlyClient,
    model: 'contact' | 'company' = 'contact',
    includeArchived = false,
  ): Promise<DataAttribute[]> {
    const result = await this.request.get<IntercomList<DataAttribute>>(
      'data_attributes',
      { model, include_archived: String(includeArchived) },
    );

    return result.data;
  }
}
