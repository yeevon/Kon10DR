<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\Tournaments;
use Validator;
use App\Http\Resources\TournamentResource;

class TournamentsController extends BaseController
{
	const MAX_PAGINATION = 5;
	public function __construct()
	{
		$this->middleware('can:view tournaments', ['only' => ['index','show']]);
		$this->middleware('can:edit tournaments', ['only' => ['create','store','edit','update','destroy']]);
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index()
	{
		$tournaments = Tournaments::latest()->paginate(self::MAX_PAGINATION);
		TournamentResource::collection($tournaments);
		return $this->sendResponse($tournaments, 'Tournaments retrieved successfully.');
	}
	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request)
	{
		$input = $request->all();

		$validator = Validator::make($input, [
			'name' => 'required',
			'detail' => 'required'
		]);

		if($validator->fails()){
			return $this->sendError('Validation Error.', $validator->errors());
		}

		$tournament = Tournaments::create($input);

		return $this->sendResponse(new TournamentResource($tournament), 'Tournament created successfully.');
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function show($id)
	{

		$tournament = Tournaments::find($id);

		if (is_null($tournament)) {
			return $this->sendError('Product not found.');
		}

		return $this->sendResponse(new TournamentResource($tournament), 'Tournament retrieved successfully.');
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, Tournament $tournament)
	{

		$input = $request->all();

		$validator = Validator::make($input, [
			'name' => 'required',
			'detail' => 'required'
		]);

		if($validator->fails()){
			return $this->sendError('Validation Error.', $validator->errors());
		}

		$tournament->name = $input['name'];
		$tournament->detail = $input['detail'];
		$tournament->save();

		return $this->sendResponse(new TournamentResource($tournament), 'Tournament updated successfully.');
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function destroy(Tournament $tournament)
	{

		$tournament->delete();

		return $this->sendResponse([], 'Tournament deleted successfully.');
	}
}