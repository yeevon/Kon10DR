<?php

namespace App\Http\Controllers\API;

use App\Models\UserProfile;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\Tournaments;
use Validator;
use App\Http\Resources\UserProfileResource;

class UserProfileController extends BaseController
{
	public function __construct()
	{
		$this->middleware('can:view tournaments', ['only' => ['index','show']]);
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index(Request $request)
	{
		$userProfile = UserProfile::where('email', $request->user()->email)->get();

		return $this->sendResponse(UserProfileResource::collection($userProfile), 'User profile retrieved successfully.');
	}

}