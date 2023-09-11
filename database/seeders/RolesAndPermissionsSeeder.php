<?php

namespace Database\Seeders;


use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesAndPermissionsSeeder extends Seeder
{
	public function run()
	{
		// Create roles
		$this->createPermission('view tournaments', 'web');
		$this->createPermission('view tournaments', 'api');

		// Assign permissions to roles
		$userRole = $this->createRole('user', 'web');
		$userRole->givePermissionTo('view tournaments');

		$userRole = $this->createRole('user', 'api');
		$userRole->givePermissionTo('view tournaments');
		// $userRole->givePermissionTo($this->createPermission('view tournaments', 'web'));
		// $userRole->givePermissionTo($this->createPermission('view tournaments', 'api'));


	}

	private function createRole($roleName, $guardName = 'web')
	{
		$role = Role::create(['guard_name' => $guardName, 'name' => $roleName]);
		return $role;
	}

	private function createPermission($name, $guardName = 'web')
	{
		$permission = Permission::create(['guard_name' => $guardName, 'name' => $name]);
		return $permission;
	}
}
