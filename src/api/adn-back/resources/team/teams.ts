import { httpInitializer } from '@/api/adn-back/http'
import type { ListTeamRequest, PagedResultOfListTeamModel } from '@/api/adn-back/models'

const resource = 'teams'
export default class TeamsResource {
  public async listAsync(request: ListTeamRequest): Promise<PagedResultOfListTeamModel> {
    const response = await httpInitializer().get(`${resource}`, {
      params: { ...request }
    })
    return response.data as PagedResultOfListTeamModel
  }
}
