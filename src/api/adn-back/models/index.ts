/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ErrorResponse {
  /** @format int32 */
  statusCode?: number
  message?: string
  errors?: Record<string, string[]>
}

export interface CreateLoginUserRequest {
  /**
   * @minLength 1
   * @pattern ^[^@]+@[^@]+$
   */
  email: string
  /** @minLength 1 */
  password: string
}

export interface CreateRegisterUserRequest {
  /** @minLength 1 */
  username: string
  /**
   * @minLength 1
   * @pattern ^[^@]+@[^@]+$
   */
  email: string
  /** @minLength 1 */
  password: string
  /** @format binary */
  profilePicture?: File | null
}

export type DeleteUserRequest = object

export interface ForgotPasswordUserRequest {
  /**
   * @minLength 1
   * @pattern ^[^@]+@[^@]+$
   */
  email: string
}

export interface GetConnectedUserResponse {
  /** @format int32 */
  id?: number
  /** @format int32 */
  teamId?: number | null
  username?: string
  email?: string
  /** @format int32 */
  scorePronostics?: number
  profilePicture?: string | null
  typeEloLol?: TypeEloLol | null
  typeEloValorant?: TypeEloValorant | null
}

export enum TypeEloLol {
  Iron4 = 'Iron4',
  Iron3 = 'Iron3',
  Iron2 = 'Iron2',
  Iron1 = 'Iron1',
  Bronze4 = 'Bronze4',
  Bronze3 = 'Bronze3',
  Bronze2 = 'Bronze2',
  Bronze1 = 'Bronze1',
  Silver4 = 'Silver4',
  Silver3 = 'Silver3',
  Silver2 = 'Silver2',
  Silver1 = 'Silver1',
  Gold4 = 'Gold4',
  Gold3 = 'Gold3',
  Gold2 = 'Gold2',
  Gold1 = 'Gold1',
  Platinum4 = 'Platinum4',
  Platinum3 = 'Platinum3',
  Platinum2 = 'Platinum2',
  Platinum1 = 'Platinum1',
  Emerald4 = 'Emerald4',
  Emerald3 = 'Emerald3',
  Emerald2 = 'Emerald2',
  Emerald1 = 'Emerald1',
  Diamond4 = 'Diamond4',
  Diamond3 = 'Diamond3',
  Diamond2 = 'Diamond2',
  Diamond1 = 'Diamond1',
  Master4 = 'Master4',
  Master3 = 'Master3',
  Master2 = 'Master2',
  Master1 = 'Master1',
  GrandMaster4 = 'GrandMaster4',
  GrandMaster3 = 'GrandMaster3',
  GrandMaster2 = 'GrandMaster2',
  GrandMaster1 = 'GrandMaster1',
  Challenger4 = 'Challenger4',
  Challenger3 = 'Challenger3',
  Challenger2 = 'Challenger2',
  Challenger1 = 'Challenger1'
}

export enum TypeEloValorant {
  Iron1 = 'Iron1',
  Iron2 = 'Iron2',
  Iron3 = 'Iron3',
  Bronze1 = 'Bronze1',
  Bronze2 = 'Bronze2',
  Bronze3 = 'Bronze3',
  Silver1 = 'Silver1',
  Silver2 = 'Silver2',
  Silver3 = 'Silver3',
  Gold1 = 'Gold1',
  Gold2 = 'Gold2',
  Gold3 = 'Gold3',
  Platinum1 = 'Platinum1',
  Platinum2 = 'Platinum2',
  Platinum3 = 'Platinum3',
  Diamond1 = 'Diamond1',
  Diamond2 = 'Diamond2',
  Diamond3 = 'Diamond3',
  Immortal1 = 'Immortal1',
  Immortal2 = 'Immortal2',
  Immortal3 = 'Immortal3',
  Radiant = 'Radiant'
}

export interface GetUserResponse {
  /** @format int32 */
  id?: number
  username?: string
  email?: string
  /** @format int32 */
  scorePronostics?: number
}

export type GetUserRequest = object

export interface PagedResultOfListScorePronosticUserModel {
  /** @format int32 */
  totalItems?: number
  value?: ListScorePronosticUserModel[]
}

export interface ListScorePronosticUserModel {
  /** @format int32 */
  id?: number
  username?: string
  /** @format int32 */
  scorePronostics?: number | null
  profilePicture?: string | null
}

export type ListScorePronosticUserRequest = QueryParameters & object

export type QueryParameters = object

export interface PagedResultOfListUserModel {
  /** @format int32 */
  totalItems?: number
  value?: ListUserModel[]
}

export interface ListUserModel {
  /** @format int32 */
  id?: number
  username?: string
  email?: string
}

export type ListUserRequest = QueryParameters & object

export interface PatchPasswordUserRequest {
  password?: string
  oldPassword?: string
}

export interface PatchPayedUserRequest {
  hasPayed?: boolean
}

export interface UpdateUserRequest {
  /** @minLength 1 */
  username: string
  /**
   * @minLength 1
   * @pattern ^[^@]+@[^@]+$
   */
  email: string
  /** @format binary */
  profilePicture?: File | null
}

export interface CreateTeamRequest {
  description?: string | null
  /** @minLength 1 */
  name: string
  /** @minLength 1 */
  password: string
  typeGame?: TypeGame
  /** @format binary */
  profilePicture?: File | null
}

export enum TypeGame {
  Valorant = 'Valorant',
  Lol = 'Lol'
}

export type DeleteTeamRequest = object

export type GetTeamRequest = object

export interface PagedResultOfListTeamModel {
  /** @format int32 */
  totalItems?: number
  value?: ListTeamModel[]
}

export interface ListTeamModel {
  /** @format int32 */
  id?: number
  name?: string
  profilePicture?: string | null
}

export type ListTeamRequest = QueryParameters & object

export interface PatchJoinUserTeamRequest {
  password?: string
}

export interface PatchRemoveUserTeamRequest {
  /** @format int32 */
  userId?: number
}

export interface UpdateTeamRequest {
  description?: string | null
  name?: string | null
  password?: string | null
  /** @format binary */
  profilePicture?: File | null
}

export interface CreatePronosticRequest {
  /**
   * @format int32
   * @minLength 1
   */
  matchId: number
  /**
   * @format int32
   * @minLength 1
   */
  userId: number
  /** @minLength 1 */
  resultTeam1: TypeResult
  /** @minLength 1 */
  resultTeam2: TypeResult
}

export enum TypeResult {
  Null = 'Null',
  Win = 'Win',
  Loose = 'Loose'
}

export interface ListPronosticModel {
  /** @format int32 */
  id?: number
  /** @format int32 */
  matchId?: number
  resultTeam1?: TypeResult | null
  resultTeam2?: TypeResult | null
  isDisabled?: boolean
}

export type ListPronosticRequest = object

export interface UpdatePronosticRequest {
  /** @minLength 1 */
  resultTeam1: TypeResult
  /** @minLength 1 */
  resultTeam2: TypeResult
}

export interface CreateMatchRequest {
  /**
   * @format int32
   * @minLength 1
   */
  team1Id: number
  /**
   * @format int32
   * @minLength 1
   */
  team2Id: number
  /**
   * @format int32
   * @minLength 1
   */
  team1Score: number
  /**
   * @format int32
   * @minLength 1
   */
  team2Score: number
  /** @minLength 1 */
  typeGame: TypeGame
  stepMatch?: StepMatch
}

export enum StepMatch {
  Pool1 = 'Pool1',
  Pool2 = 'Pool2',
  Pool3 = 'Pool3',
  Pool4 = 'Pool4',
  RoundOf16 = 'RoundOf16',
  QuarterFinal = 'QuarterFinal',
  SemiFinal = 'SemiFinal',
  Final = 'Final'
}

export interface CreateMatchPoolRequest {
  /** @minLength 1 */
  typeGame: TypeGame
}

export type DeleteMatchRequest = object

export interface GetMatchResponse {
  /** @format int32 */
  id?: number
  team1?: TeamModel
  team2?: TeamModel
  statutMatch?: StatutMatch
}

export interface TeamModel {
  /** @format int32 */
  id?: number
  name?: string
  isWinner?: boolean
  /** @format int32 */
  teamScore?: number
}

export enum StatutMatch {
  NotStarted = 'NotStarted',
  InProgress = 'InProgress',
  Finished = 'Finished'
}

export type GetMatchRequest = object

export interface PagedResultOfListMatchModel {
  /** @format int32 */
  totalItems?: number
  value?: ListMatchModel[]
}

export interface ListMatchModel {
  /** @format int32 */
  id?: number
  /** @format int32 */
  team1Score?: number
  /** @format int32 */
  team2Score?: number
  team1Name?: string
  team2Name?: string
  statutMatch?: StatutMatch
  team1ProfilePicture?: string | null
  team2ProfilePicture?: string | null
  /** @format date-time */
  matchDateTime?: string
  stepMatch?: StepMatch
}

export type ListMatchRequest = QueryParameters & object

export interface PatchStatutMatchRequest {
  statutMatch?: StatutMatch
}

export interface UpdateMatchRequest {
  /**
   * @format int32
   * @minLength 1
   */
  team1Score: number
  /**
   * @format int32
   * @minLength 1
   */
  team2Score: number
}
